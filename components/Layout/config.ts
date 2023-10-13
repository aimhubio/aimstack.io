import DiscordIcon from 'public/images/static/social/discord.svg';
import TwitterXIcon from 'public/images/static/social/twitterx.svg';
import LinkedInIcon from 'public/images/static/social/linkedin.svg';
import FacebookIcon from 'public/images/static/social/facebook.svg';
import { StaticImageData } from 'next/image';

export interface Social {
  name: string;
  icon: StaticImageData;
  url: string;
}

export interface INavList {
  title: string;
  to: string;
  external: boolean;
  badge?: string;
}

export const navList: INavList[] = [
  // {
  //   title: 'GitHub',
  //   to: 'https://github.com/aimhubio/aim',
  //   external: true,
  // },
  {
    title: 'Quick start',
    to: '/#quick-start',
    external: false,
  },
  {
    title: 'Features',
    to: '/#features',
    external: false,
  },
  {
    title: 'Demos',
    to: '/#demos',
    external: false,
  },
  {
    title: 'Docs',
    to: 'https://aimstack.readthedocs.io/en/latest/',
    external: true,
  },
  {
    title: 'Pricing',
    to: '/pricing',
    external: false,
  },
  {
    title: 'Blog',
    to: '/blog',
    external: false,
  },
  {
    title: 'About Us',
    to: '/about-us',
    external: false,
  },
  {
    title: 'Career',
    to: 'https://aimstack.notion.site/Working-at-AimStack-7f5d93e04f0645129dd314d5f077511b',
    external: true,
    badge: 'Hiring',
  },
];

export const socialList: Social[] = [
  {
    name: 'Discord',
    icon: DiscordIcon,
    url: 'https://community.aimstack.io/',
  },
  {
    name: 'X',
    icon: TwitterXIcon,
    url: 'https://twitter.com/aimstackio',
  },
  {
    name: 'LinkedIn',
    icon: LinkedInIcon,
    url: 'https://www.linkedin.com/company/aimstackio/',
  },
  {
    name: 'FaceBook',
    icon: FacebookIcon,
    url: 'https://www.facebook.com/aimstackio',
  },
];
