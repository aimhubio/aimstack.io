import { reset } from './reset';

const global = {
  ...reset,
  html: {
    scrollBehavior: 'smooth',
  },
  body: {
    background: '$white',
    color: '$textColor',
    fontFamily: '$base',
    fontSize: '$baseSize',
    lineHeight: '1.35',
  },
  strong: {
    fontWeight: '$5',
  },

  a: {
    textDecoration: 'none',
    color: 'inherit',
    '&.link': {
      color: '$primary',
      fontWeight: '$4',
    },
  },
};

export default global;
