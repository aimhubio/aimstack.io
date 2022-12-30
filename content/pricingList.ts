const pricingList = [
  {
    title: 'Open Source',
    image: '/images/static/pricing/open-source.svg',
    description:
      'We are building with an open roadmap.\n' +
      'While working with companies we use their feedback constantly in improving core Aim and sometimes reprioritizing items in the roadmap.',
    list: ['Core Aim support', 'Open roadmap'],
    plan: 'Free',
    buttonVariant: 'secondary',
    buttonText: 'Learn More',
    buttonURL: 'https://github.com/aimhubio/aim',
  },
  {
    title: 'Enterprise',
    image: '/images/static/pricing/enterprise.svg',
    description:
      "AimStack also offers paid Enterprise support that's beyond core Aim - mainly involving help with additional plugins and specific Aim deployments.",
    list: [
      'Multi-user deployment',
      'Custom plugins',
      'Support outside core Aim',
    ],
    plan: 'Paid',
    buttonVariant: 'primary',
    buttonText: 'Contact us',
    buttonURL: 'mailto:hello@aimstack.io',
  },
];

export default pricingList;
