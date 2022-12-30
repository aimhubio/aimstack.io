import { styled } from 'styles';

const BlogSingleStyle = styled('div', {});

const ImageWrapper = styled('div', {
  position: 'relative',

  img: {
    position: 'static !important',
  },
});

const PostNavigation = styled('div', {
  padding: '50px 0',
  borderTop: '2px solid $lightGrey',
  borderBottom: '2px solid $lightGrey',
  marginBottom: '50px',

  a: {
    transition: '$main',

    '.text, .chevron-text': {
      transition: '$main',
    },
    '&:hover': {
      '.text': {
        color: '$primary',
      },
    },
  },
});

const Prev = styled('div', {
  flex: 1,
  paddingRight: '$3',
  borderRight: '2px solid $lightGrey',

  '@bp2': {
    // borderRight: 'none',
    // paddingRight: '0',
  },

  a: {
    '&:hover': {
      '.chevron-text': {
        transform: 'translateX(15px)',
        '@bp2': {
          transform: 'translateX(0)',
        },
      },
    },
  },
});
const Next = styled('div', {
  flex: 1,
  textAlign: 'right',
  paddingLeft: '$3',

  '@bp2': {
    // textAlign: 'left',
    // paddingLeft: '0',
  },

  a: {
    '&:hover': {
      '.chevron-text': {
        transform: 'translateX(-15px)',
        '@bp2': {
          transform: 'translateX(0)',
        },
      },
    },
  },
});

export { BlogSingleStyle, ImageWrapper, PostNavigation, Prev, Next };
