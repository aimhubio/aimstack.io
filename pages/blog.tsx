import React from 'react';
import { Text, Container } from 'styles/foundations';
import BlogList from 'components/BlogList/BlogList';
import Seo from 'components/SEO/SEO';
import { sortByDate, pageCount } from '../utils';
import { allPosts } from 'contentlayer/generated';
import { pick } from '@contentlayer/client';
import Pagination from '../components/Pagination/Pagnation';
import { show_per_page } from '../config';
import { useRouter } from 'next/router';
import blogSeo from '../content/SeoData/blog';

export default function Blog() {
  const router = useRouter();
  const params = router.query;
  const pathname = router.pathname;
  const page = Number(params.page) || 1;
  const posts = allPosts.map((post) =>
    pick(post, [
      'title',
      'date',
      'slug',
      'description',
      'draft',
      'image',
      'categories',
    ])
  );

  // sort article base on  date
  let postSortByDate = posts.sort(sortByDate);

  // filter publish posts
  const publish = postSortByDate.filter((post, i) => {
    // return post.draft === false;
    return !post.draft;
  });

  // count how many pages
  let totalPostCount = pageCount(allPosts.length);

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

  return (
    <>
      <Seo {...blogSeo} />
      <Container>
        <Text
          as="h1"
          size={6}
          className="title"
          css={{ textAlign: 'center', my: '$10' }}
        >
          Recent Articles
        </Text>

        <BlogList blogList={totalPosts} />
        <Pagination
          pathname={pathname}
          currentPage={page}
          totalPostCount={totalPostCount}
        />
      </Container>
    </>
  );
}
