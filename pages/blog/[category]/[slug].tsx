import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Markdown from 'markdown-to-jsx';
import {
  TwitterShareButton,
  FacebookShareButton,
  RedditShareButton,
  LinkedinShareButton,
} from 'next-share';
import { Text, Container, Flex, InnerHTML } from 'styles/foundations';
import {
  BlogSingleStyle,
  ImageWrapper,
  PostNavigation,
  Prev,
  Next,
  ShareSocial,
  BlogImage,
} from 'styles/pages/Blog.style';
import {formattedDate, DynamicImgLoader, ImgPlaceholder, slugify} from 'utils/index';

import { useRouter } from 'next/router';
import { Icon } from 'components/UIkit';
import { allPosts } from 'contentlayer/generated';
import Seo from 'components/SEO/SEO';
import { Category } from 'components/Card/Card.style';
import SITE_URL from 'config';

import Head from 'next/head';

function getBaseURL() {
  if (typeof window !== 'undefined') {
    return `https://${window.location.host}`;
  }
  return SITE_URL;
}

export default function PostPage({ post, posts }) {
  const router = useRouter();
  const params = router.query;
  const { slug, category } = params;
  const index = posts.findIndex((object) => object.slug === slug);
  const baseURL = getBaseURL();
  const path = `blog/${category}/${post.slug}`;
  const url = `${baseURL}/${path}`;
  const imageUrl: string = post.image.startsWith('http')
    ? post.image
    : `${baseURL}${post.image}`;

  function getNeighborPostUrl(index: number) {
    const { categories, slug } = posts[index];
    const category = slugify(categories[0]);
    return `/blog/${category}/${slug}`;
  }

  return (
    <BlogSingleStyle>
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:image" content={imageUrl} />
        <meta name="twitter:site" content="@aimstack" />
        <meta name="twitter:creator" content="@aimstack" />
      </Head>
      <Seo
        title={post.title}
        description={post.description}
        date={post.date}
        image={post.image}
        path={path}
      />
      <Container style={{ paddingTop: '100px' }}>
        <Link href="/blog">
          <Flex align="center" css={{ marginTop: '$10' }}>
            <Icon name="back" size={20} />
            <Text size={3} css={{ fontWeight: '$3' }}>
              Go Back
            </Text>
          </Flex>
        </Link>
      </Container>
      <Container css={{ maxWidth: '848px' }}>
        <Flex gap={5} justify={'between'} css={{ marginTop: '$6' }}>
          <Category>
            <Link href={`/blog/${category}`}>
              <Text size={1} css={{ display: 'flex', alignItems: 'center' }}>
                <Icon name="folder" size={14} />
                {post.categories[0]}
              </Text>
            </Link>
          </Category>
          <Flex gap={2} align="center">
            <Icon name="clock" size={14} />
            <Text size={1}>{formattedDate(post.date)}</Text>
          </Flex>
        </Flex>
        <Text
          as="h1"
          size={7}
          className="title"
          css={{ my: '$6', fontWeight: '$4' }}
        >
          {post.title}
        </Text>
        <Flex gap={2} align="center" css={{ marginBottom: '$6' }}>
          <Text as="span" size={2}>
            {post.author.split(',').length > 1 ? 'Authors:' : 'Author:'}
          </Text>
          <Text
            as="span"
            size={2}
            className="author"
            css={{ fontWeight: '$2' }}
          >
            {post.author}
          </Text>
        </Flex>
      </Container>
      <ImageWrapper>
        <BlogImage
          src={post.image}
          key={path}
          alt={post.title}
          title={post.title}
          width={1200}
          height={600}
          placeholder={'blur'}
          loader={DynamicImgLoader}
          blurDataURL={ImgPlaceholder}
        />
      </ImageWrapper>
      <Container css={{ maxWidth: '848px' }}>
        <InnerHTML className="blog-inner">
          <Markdown
            options={{
              overrides: {
                img: {
                  component: Image,
                  props: {
                    alt: 'blog image',
                    style: {
                      objectFit: 'contain',
                      aspectRatio: 'auto',
                      width: '100%',
                      height: '100%',
                    },
                    className: 'blog-image',
                    key: slug,
                    placeholder: 'blur',
                    blurDataURL: ImgPlaceholder,
                    width: 1200,
                    height: 600,
                    quality: 75,
                    loader: DynamicImgLoader,
                  },
                },
              },
            }}
          >
            {post.body.raw}
          </Markdown>
        </InnerHTML>
        <ShareSocial>
          <TwitterShareButton url={url} title={post.title}>
            <Icon size={16} name="twitter" />
          </TwitterShareButton>
          <LinkedinShareButton url={url} title={post.title}>
            <Icon size={16} name="linkedIn" />
          </LinkedinShareButton>
          <FacebookShareButton url={url} title={post.title}>
            <Icon size={16} name="fb" />
          </FacebookShareButton>
          <RedditShareButton url={url} title={post.title}>
            <Icon size={16} name="reddit" />
          </RedditShareButton>
        </ShareSocial>
      </Container>
      <PostNavigation>
        <Container css={{ maxWidth: '848px' }}>
          <Flex>
            <Prev>
              {!!index && (
                <Link rel="prev" href={getNeighborPostUrl(index - 1)}>
                  <Flex align="center">
                    <Icon name="chevron-left" />
                    <Text
                      className="chevron-text"
                      size={1}
                      css={{ fontWeight: '$3' }}
                    >
                      PREVIOUS POST
                    </Text>
                  </Flex>
                  <Text
                    className="text"
                    size={1}
                    lineClamp
                    css={{ marginTop: '$3', $$lineClamp: 2 }}
                  >
                    {posts[index - 1]?.title}
                  </Text>
                </Link>
              )}
            </Prev>
            <Next>
              {index < posts.length - 1 && (
                <Link rel="next" href={getNeighborPostUrl(index + 1)}>
                  <Flex align="center" justify="end">
                    <Text
                      className="chevron-text"
                      size={1}
                      css={{ fontWeight: '$3' }}
                    >
                      NEXT POST
                    </Text>
                    <Icon name="chevron-right" />
                  </Flex>
                  <Text
                    className="text"
                    size={1}
                    lineClamp
                    css={{ marginTop: '$3', $$lineClamp: 2 }}
                  >
                    {posts[index + 1]?.title}
                  </Text>
                </Link>
              )}
            </Next>
          </Flex>
        </Container>
      </PostNavigation>
    </BlogSingleStyle>
  );
}

export async function getStaticPaths() {
  //  filter the post and get the publish post.
  const posts = allPosts.filter((post, i) => {
    return !!post.draft === false;
  });

  // get all the post slug
  const publish = posts.map((post) => ({
    params: { slug: post.slug, category: slugify(post.categories[0]) },
  }));

  return {
    paths: publish,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  // fetch a single post by slug

  const posts = allPosts.filter((post, i) => {
    return !!post.draft === false;
  });

  const post = allPosts.find((post) => {
    return post.slug === slug;
  });

  return { props: { post, posts } };
}
