import React from 'react';
import { NextSeo, NextSeoProps } from 'next-seo';
import SITE_URL from 'config';

interface ICustomSeoProps {
  image: string;
  date?: string;
  type?: string;
  path: string;
}

type SeoProps = ICustomSeoProps & NextSeoProps;

const Seo = (props: SeoProps) => {
  const title = props.title.charAt(0).toUpperCase() + props.title.slice(1);
  return (
    <NextSeo
      title={title}
      description={props.description}
      canonical={`${SITE_URL}/${props.path}`}
      openGraph={{
        url: `${SITE_URL}/${props.path}`,
        title: title,
        description: props.description,
        type: props.type || 'website',
        locale: 'en_US',
        article: {
          publishedTime: props.date,
          authors: [`${SITE_URL}/about-us`],
        },
        images: [
          {
            url: props.image,
            width: 1224,
            height: 724,
            alt: title,
            type: 'image/jpeg',
          },
        ],
        site_name: 'AimStack',
      }}
    />
  );
};

export default Seo;
