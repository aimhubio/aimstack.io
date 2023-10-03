export interface Social {
  name: string;
  icon: string;
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
    name: 'Discord',
    icon: '/images/static/social/discord.svg',
    url: 'https://community.aimstack.io/',
  },
  {
    name: 'X',
    icon: '/images/static/social/twitterx.svg',
    url: 'https://twitter.com/aimstackio',
  },
  {
    name: 'LinkedIn',
    icon: '/images/static/social/linkedin.svg',
    url: 'https://www.linkedin.com/company/aimstackio/',
  },
  {
    name: 'FaceBook',
    icon: '/images/static/social/facebook.svg',
    url: 'https://www.facebook.com/aimstackio',
  },
];
