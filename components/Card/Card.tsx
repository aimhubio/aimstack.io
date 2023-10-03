import React from 'react';
import {
  CardStyle,
  CardContent,
  Category,
  CardFooter,
  ImageWrapper,
} from './Card.style';
import { Text } from 'styles/foundations';
import Image from 'next/image';
import { Icon } from 'components/UIkit';
import Link from 'next/link';
import { slugify } from 'utils';

const Card = ({ categories, description, image, slug, title, views }: any) => {
  const category = slugify(categories?.[0]);
  const blogUrl = `/blog/${category}/${slug}`;
  return (
    <CardStyle>
      <ImageWrapper>
        <Link href={blogUrl}>
          <Image
            key={slug}
            src={image}
            alt={title}
            fill={true}
            quality={100}
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
          <Link href={blogUrl} rel='canonical'>{title}</Link>
        </Text>
        <Text
          size={2}
          className="title"
          lineClamp
          css={{ my: '$6', $$lineClamp: 3, fontFamily: '$Lora' }}
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
