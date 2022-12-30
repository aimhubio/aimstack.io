import React from 'react';
import { NextSeo, NextSeoProps } from 'next-seo';
import SITE_URL from 'config';


interface ICustomSeoProps {
  image: string,
  date?: string,
  type?: string,
  path: string
}

type SeoProps = ICustomSeoProps & NextSeoProps

const Seo = (props: SeoProps) => {
  return (
    <NextSeo
      title={props.title}
      description={props.description}
      openGraph={{
        url: `${SITE_URL}${props.path}`,
        title: props.title,
        description: props.description,
        type: props.type || 'website',
        locale: 'en_US',
        article: {
          publishedTime: props.date,
          authors: [`${SITE_URL}about-us`]
        },
        images: [
          {
            url: props.image,
            width: 1224,
            height: 724,
            alt: props.title,
            type: 'image/jpeg'
          }
        ],
        site_name: 'Aimstack'
      }}
      twitter={{
        cardType: 'summary_large_image'
      }}
    />
  );
};

export default Seo;
