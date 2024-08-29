import React, { useCallback } from 'react';
import { Text, Container } from 'styles/foundations';
import BlogList from 'components/BlogList/BlogList';
import Seo from 'components/SEO/SEO';
import { pageCount, getTotalPosts } from 'utils';
import { allPosts } from 'contentlayer/generated';
import { pick } from '@contentlayer/client';
import Pagination from 'components/Pagination/Pagnation';
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
    ]),
  );

  // count how many pages
  const totalPostCount = pageCount(allPosts.length);

  const totalPosts = useCallback(
    () => getTotalPosts(posts, page),
    [page, posts],
  );

  return (
    <>
      <Seo {...blogSeo} />
      <Container style={{ paddingTop: '100px' }}>
        <Text
          as="h1"
          size={6}
          className="title"
          css={{ textAlign: 'center', my: '$10' }}
        >
          Recent Articles
            <img referrerPolicy="no-referrer-when-downgrade"
               src="https://static.scarf.sh/a.png?x-pxid=8b1927ba-96ec-4c48-9ee9-6037a9b3dbe5"/>
        </Text>

        <BlogList blogList={totalPosts()} />
        <Pagination
          pathname={pathname}
          currentPage={page}
          totalPostCount={totalPostCount}
        />
      </Container>
    </>
  );
}
