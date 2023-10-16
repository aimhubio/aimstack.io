import { styled } from 'styles';
import Image from 'next/image';

const BlogSingleStyle = styled('div', {});

const ImageWrapper = styled('div', {
  position: 'relative',
  display: 'flex'
});

const BlogImage = styled(Image, {
  objectFit: 'contain',
  minHeight: '100%',
  width: '100%',
  height: '100%',
  maxWidth: '75%',
  marginInline: 'auto'
});

const ShareSocial = styled('div', {
  display: 'flex',
  justifyContent: 'flex-end',
  marginBottom: '$10',
  button: {
    height: '40px',
    width: '40px',
    backgroundColor: '$lightGrey !important',
    borderRadius: '$1',
    marginLeft: '$3',
    transition: '$main',

    '&:hover': {
      '&[aria-label=twitter]': {
        backgroundColor: '#43b1ff !important',
      },
      '&[aria-label=linkedin]': {
        backgroundColor: '#0A66C2 !important',
      },
      '&[aria-label=facebook]': {
        backgroundColor: '#6e8dd0 !important',
      },
      '&[aria-label=reddit]': {
        backgroundColor: '#fb411c !important',
      },

      '.icon': {
        fill: '$white',
      },
    },
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

export {
  BlogSingleStyle,
  ImageWrapper,
  PostNavigation,
  Prev,
  Next,
  ShareSocial,
  BlogImage,
};
