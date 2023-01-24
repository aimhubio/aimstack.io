import SITE_URL, { show_per_page } from '../config';

//  array sortByDate
export function sortByDate(a, b) {
  return new Date(b.date) - new Date(a.date);
}

// slugify the title
export function slugify(title) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
}

// count the page number
export function pageCount(number) {
  return Math.ceil(number / show_per_page);
}

// convert the image url
export function ImageUrl(url) {
  return SITE_URL + url;
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
      show_per_page * page
    );
  }

  return totalPosts
}
