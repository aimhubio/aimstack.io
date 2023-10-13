import { reset } from './reset';

const global = {
  ...reset,
  body: {
    background: '$white',
    color: '$textColor',
    fontFamily: '$base',
    fontSize: '$baseSize',
    lineHeight: '1.35',
    overscrollBehavior: 'none',
  },
  strong: {
    fontWeight: '$5',
  },
  img: {
    userDrag: 'none',
    '-webkit-user-drag': 'none',
  },
  a: {
    textDecoration: 'none',
    color: 'inherit',
    '&.link': {
      color: '$primary',
      fontWeight: '$4',
      transition: '$main',

      '&:hover': {
        color: '$primaryHover',
      },
    },
  },
  '.text-center': {
    textAlign: 'center',
  },
};

export default global;
