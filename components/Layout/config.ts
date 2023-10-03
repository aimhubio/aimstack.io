import Discord from 'public/images/static/social/discord.svg';
import TwitterX from 'public/images/static/social/twitterx.svg';
import LinkedIn from 'public/images/static/social/linkedIn.svg';
import Facebook from 'public/images/static/social/facebook.svg';

export interface Social {
  name: string;
  icon: 'discord' | 'twitter' | 'linkedIn' | 'fb';
  url: string;
}

export interface INavList {
  title: string;
  to: string;
  external: boolean;
  badge?: string
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
    badge: 'Hiring'
  },
];

export const socialList: Social[] = [
  {
    name: 'discord',
    icon: Discord,
    url: 'https://community.aimstack.io/',
  },
  {
    name: 'twitter',
    icon: TwitterX,
    url: 'https://twitter.com/aimstackio',
  },
  {
    name: 'linkedIn',
    icon: LinkedIn,
    url: 'https://www.linkedin.com/company/aimstackio/',
  },
  {
    name: 'fb',
    icon: Facebook,
    url: 'https://www.facebook.com/aimstackio',
  },
];
