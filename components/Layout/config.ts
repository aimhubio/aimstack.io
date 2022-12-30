export interface ISocialList {
  icon: 'slack' | 'twitter' | 'linkedIn' | 'fb';
  url: string;
}

export interface INavList {
  title: string;
  to: string;
  external: boolean;
}

export const navList: INavList[] = [
  {
    title: 'About Us',
    to: '/about-us',
    external: false,
  },
  {
    title: 'GitHub',
    to: 'https://github.com/aimhubio/aim',
    external: true,
  },
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
    title: 'Roadmap',
    to: 'https://github.com/aimhubio/aim#roadmap',
    external: true,
  },
  {
    title: 'Blog',
    to: '/blog',
    external: false,
  },
  {
    title: 'Pricing',
    to: '/pricing',
    external: false,
  },
];

export const socialList: ISocialList[] = [
  {
    icon: 'slack',
    url: 'https://aimstack.slack.com/ssb/redirect#/shared-invite/email',
  },
  {
    icon: 'twitter',
    url: 'https://twitter.com/aimstackio',
  },
  {
    icon: 'linkedIn',
    url: 'https://www.linkedin.com/company/aimstackio/',
  },
  {
    icon: 'fb',
    url: 'https://www.facebook.com/aimstackio',
  },
];
