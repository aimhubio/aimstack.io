import { slugify, ImageUrl, titleCase } from 'utils';
import { NextSeo } from 'next-seo';
import { Text, Container } from 'styles/foundations';
import { allPosts } from 'contentlayer/generated';
import BlogList from 'components/BlogList/BlogList';
import Pagination from 'components/Pagination/Pagnation';
import React from 'react';
import { useRouter } from 'next/router';

export default function Category({ posts }) {
  const router = useRouter();
  const params = router.query;
  const pathname = '/category/' + router.query.slug;
  const page = Number(params.page) || 1;
  return (
    <>
      <NextSeo
        title="Access your category realted articles"
        description="Access your category realted articles"
        openGraph={{
          url: 'https://aimstack.io/',
          title: 'Access your category realted articles',
          description: 'Access your category realted articles',

          images: [
            {
              url: `${ImageUrl('banner.png')}`,
              width: 1224,
              height: 724,
              alt: 'banner',
              type: 'image/jpeg',
            },
          ],
          site_name: 'Aimstack',
        }}
      />

      <Container>
        <Text
          as="h1"
          size={6}
          className="title"
          css={{ textAlign: 'center', my: '$10' }}
        >
          Category: {titleCase(router.query.slug)}
        </Text>

        <BlogList blogList={posts} />
        <Pagination
          currentPage={page}
          pathname={pathname}
          totalPostCount={posts}
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
      post.categories.map((category) => {
        const slug = slugify(category);
        paths.push({ params: { slug } });
      });
    }
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  let posts = [];

  // get all category posts base on slug
  const post = allPosts.map((post) => {
    if (!!post.draft === false) {
      post.categories.filter((category) => {
        const categorySlug = slugify(category);
        if (categorySlug === slug) {
          posts.push(post);
        }
      });
      return posts;
    }
  });

  return { props: { posts } };
}
