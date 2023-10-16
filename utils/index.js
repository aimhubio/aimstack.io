import SITE_URL, { show_per_page } from '../config';

//  array sortByDate
export function sortByDate(a, b) {
  return new Date(b.date) - new Date(a.date);
}

// slugify the str
export function slugify(str) {
  return String(str)
    .normalize('NFKD') // split accented characters into their base characters and diacritical marks
    .replace(/[\u0300-\u036f]/g, '') // remove all the accents, which happen to be all in the \u03xx UNICODE block.
    .trim() // trim leading or trailing whitespace
    .toLowerCase() // convert to lowercase
    .replace(/[^a-z0-9 -]/g, '') // remove non-alphanumeric characters
    .replace(/\s+/g, '-') // replace spaces with hyphens
    .replace(/-+/g, '-'); // remove consecutive hyphens
}

// count the page number
export function pageCount(number) {
  return Math.ceil(number / show_per_page);
}

// convert the image url
export function ImageUrl(url) {
  return SITE_URL + '/' + url;
}

// convert kebab case into title
export function titleCase(str) {
  return str
    .replace(/(^\w)/g, (g) => g[0].toUpperCase())
    .replace(/([-_]\w)/g, (g) => ' ' + g[1].toUpperCase())
    .trim();
}

// convert the date to (Month day, Year)
export function formattedDate(date) {
  return new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

export function getTotalPosts(posts, page) {
  // sort article base on  date
  let postSortByDate = posts.sort(sortByDate);

  // filter publish posts
  const publish = postSortByDate.filter((post, i) => {
    // return post.draft === false;
    return !post.draft;
  });

  //  get only first ten post
  let totalPosts = publish.slice(0, show_per_page);

  if (page === 2) {
    totalPosts = publish.slice(show_per_page, show_per_page * page);
  }

  if (page > 2) {
    totalPosts = publish.slice(
      show_per_page * page - show_per_page,
      show_per_page * page,
    );
  }

  return totalPosts;
}

export const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export function DynamicImgLoader({ src, width, quality}) {
  if(src.startsWith('https://miro.medium.com/v2')) {
    return `https://miro.medium.com/v2/resize:fit:${width || 1200}/format:webp/quality:${quality || 75}/${src.split('/').at(-1)}`;
  }
  if(src.startsWith('https://miro.medium.com/max')) {
    return `https://miro.medium.com/max/${width || 1200}/${src.split('/').at(-1)}`;
  }
  return src;
}
export const ImgPlaceholder = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO8bQwAAe8BEAdB0H4AAAAASUVORK5CYII=';