import React, { useCallback } from 'react';
import { pick } from '@contentlayer/client';
import { slugify, ImageUrl, titleCase, getTotalPosts, pageCount } from 'utils';
import { Text, Container } from 'styles/foundations';
import { allPosts } from 'contentlayer/generated';
import BlogList from 'components/BlogList/BlogList';
import Pagination from 'components/Pagination/Pagnation';
import { useRouter } from 'next/router';
import Seo from 'components/SEO/SEO';

export default function Category({ posts }) {
  const router = useRouter();
  const params = router.query;
  const pathname = '/blog/' + params.category;
  const page = Number(params.page) || 1;

  const pickedPosts = posts.map((post) =>
    pick(post, [
      'title',
      'date',
      'slug',
      'description',
      'draft',
      'image',
      'categories',
      'new-releases',
    ]),
  );
  const totalPostCount = pageCount(posts.length);

  const totalPosts = useCallback(
    () => getTotalPosts(pickedPosts, page),
    [page, pickedPosts],
  );

  return (
    <>
      <Seo
        title={`${params.category} | AimStack`}
        description="Access your category related articles"
        image={`${ImageUrl('banner.png')}`}
        path={`blog/${params.category}`}
      />
      <Container style={{ paddingBlock: '100px' }}>
        <Text
          as="h1"
          size={6}
          className="title"
          css={{ textAlign: 'center', my: '$10' }}
        >
          Category: {titleCase(params.category)}
        </Text>
        <BlogList blogList={totalPosts()} />
        <Pagination
          currentPage={page}
          pathname={pathname}
          totalPostCount={totalPostCount}
        />
      </Container>
    </>
  );
}

export async function getStaticPaths() {
  let paths = [];

  // get all category paths
  allPosts.map((post) => {
    if (!!post.draft === false) {
      post.categories?.map((category) => {
        paths.push({ params: { category: slugify(category) } });
      });
    }
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { category } }) {
  let posts = [];

  // get all category posts base on slug
  allPosts.forEach((post) => {
    if (!!post.draft === false) {
      post.categories?.filter((categoryName) => {
        if (slugify(categoryName) === category) {
          posts.push(post);
        }
      });
    }
  });

  return { props: { posts } };
}
