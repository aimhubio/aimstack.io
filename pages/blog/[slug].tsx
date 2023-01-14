import React from 'react';
import Link from 'next/link';
import {
  TwitterShareButton,
  FacebookShareButton,
  RedditShareButton,
  RedditIcon
} from 'next-share';
import { Text, Container, Flex, InnerHTML } from 'styles/foundations';
import {
  BlogSingleStyle,
  ImageWrapper,
  PostNavigation,
  Prev,
  Next,
  ShareSocial
} from 'styles/pages/Blog.style';
import { formattedDate } from 'utils';

import { Icon } from 'components/UIkit';
import { allPosts } from 'contentlayer/generated';
import Image from 'next/image';
import Seo from '../../components/SEO/SEO';
import { Category } from '../../components/Card/Card.style';
import SITE_URL from 'config';

export default function PostPage({ post, posts }) {
  const index = posts.findIndex((object) => {
    return object.slug === post.slug;
  });

  const url = `${SITE_URL}/blog/${post.slug}`

  return (
    <BlogSingleStyle>
      <Seo
        title={post.title}
        description={post.description}
        date={post.date}
        image={post.image}
        path={`blog/${post.slug}`}
      />
      <Container>
        <Link href='/blog'>
          <Flex align='center' css={{ marginTop: '$10' }}>
            <Icon name='back' size={20} />
            <Text size={3} css={{ fontWeight: '$3' }}>
              Go Back
            </Text>
          </Flex>
        </Link>
      </Container>
      <Container css={{ maxWidth: '848px' }}>
        <Flex
          gap={5}
          justify={'between'}
          css={{marginTop: '$6'}}
        >
          <Category>
            <Link href={`/category/${post.categories[0].toLowerCase()}`}>
              <Text size={1} css={{display: 'flex', alignItems: 'center'}}>
                <Icon name='folder' size={14} />
                {post.categories[0]}
              </Text>
            </Link>
          </Category>
          <Flex gap={2} align='center'>
            <Icon name='clock' size={14} />
            <Text size={1}>{formattedDate(post.date)}</Text>
          </Flex>
        </Flex>

        <Text as='h1' size={7} className='title' css={{ my: '$6', fontWeight: '$4' }}>
          {post.title}
        </Text>
      </Container>
      <Container>
        <ImageWrapper>
          <Image
            src={post.image}
            className='card-img-top'
            alt={post.title}
            title={post.title}
            layout='fill'
            objectFit='contain'
          />
        </ImageWrapper>
      </Container>
      <Container css={{ maxWidth: '848px' }}>
        <InnerHTML dangerouslySetInnerHTML={{ __html: post.body.html }} />
        <ShareSocial>
          <TwitterShareButton
            url={url}
            title={post.title}
          >
            <Icon size={16} name='twitter' />
          </TwitterShareButton>
          <FacebookShareButton
            url={url}
            title={post.title}
          >
            <Icon size={16} name='fb' />
          </FacebookShareButton>
          <RedditShareButton
            url={url}
            title={post.title}
          >
            <Icon size={16} name='reddit' />
          </RedditShareButton>
        </ShareSocial>
      </Container>

      <PostNavigation>
        <Container css={{ maxWidth: '848px' }}>
          <Flex>
            <Prev>
              {!!index && (
                <Link href={`/blog/${posts[index - 1]?.slug}`}>
                  <Flex align='center'>
                    <Icon name='chevron-left' />
                    <Text
                      className='chevron-text'
                      size={1}
                      css={{ fontWeight: '$3' }}
                    >
                      PREVIOUS POST
                    </Text>
                  </Flex>
                  <Text className='text' size={1} lineClamp css={{ marginTop: '$3', $$lineClamp: 2 }}>
                    {posts[index - 1]?.title}
                  </Text>
                </Link>
              )}
            </Prev>
            <Next>
              {index < posts.length - 1 && (
                <Link href={`/blog/${posts[index + 1]?.slug}`}>
                  <Flex
                    align='center'
                    justify='end'
                  >
                    <Text
                      className='chevron-text'
                      size={1}
                      css={{ fontWeight: '$3' }}
                    >
                      NEXT POST
                    </Text>
                    <Icon name='chevron-right' />
                  </Flex>
                  <Text className='text' size={1} lineClamp css={{ marginTop: '$3', $$lineClamp: 2 }}>
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
  const publish = posts.map((post) => ({ params: { slug: post.slug } }));

  return {
    paths: publish,
    fallback: false
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
