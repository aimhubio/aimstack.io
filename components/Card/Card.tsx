import React from 'react';
import {
  CardStyle,
  CardContent,
  Category,
  CardFooter,
  ImageWrapper,
  CardImage,
} from './Card.style';
import {Flex, Text} from 'styles/foundations';
import { Icon } from 'components/UIkit';
import Link from 'next/link';
import {DynamicImgLoader, ImgPlaceholder, slugify} from '../../utils';

const Card = ({ categories, description, image, slug, title, views, author }: any) => {
  const category = slugify(categories?.[0]);
  const blogUrl = `/blog/${category}/${slug}`;
  return (
    <CardStyle>
      <ImageWrapper>
        <Link href={blogUrl}>
          <CardImage
            key={slug}
            src={image}
            alt={title}
            width={300}
            height={220}
            placeholder={'blur'}
            loader={DynamicImgLoader}
            blurDataURL={ImgPlaceholder}
          />
        </Link>
      </ImageWrapper>
      <CardContent>
        {Array.isArray(categories) && (
          <Category>
            <Link href={`/blog/${category}`}>
              <Text size={1} css={{ display: 'flex', alignItems: 'center' }}>
                <Icon name="folder" size={14} />
                {categories[0]}
              </Text>
            </Link>
          </Category>
        )}
        <Text as="h3" size={6} className="title" truncate>
          <Link href={blogUrl} rel="canonical">
            {title}
          </Link>
        </Text>
        <Text
          size={2}
          className="title"
          lineClamp
          css={{ my: '$4', $$lineClamp: 3, fontFamily: '$Lora' }}
        >
          <Link href={blogUrl}>{description}</Link>
        </Text>
        <CardFooter>
          {views && (
            <Text size={1} link="secondary">
              <Link href={blogUrl}>
                <Icon name="eye" size={14} />
                {views}K
              </Link>
            </Text>
          )}
        </CardFooter>
      </CardContent>
    </CardStyle>
  );
};

export default Card;
