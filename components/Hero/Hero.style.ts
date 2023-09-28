import { styled } from 'styles';

const HeroStyle = styled('section', {
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  padding: 'calc(80px + 72px) 0 80px',
  textAlign: 'center',
  backgroundImage:
    'url(/images/static/hero/dots.png), url(/images/static/hero/bg.png)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover, contain',
  backgroundPosition: 'center, right',
  overflow: 'hidden',
  '@bp1': {
    padding: 'calc(44px + 72px) 0',
  },
  '@bp2': {
    padding: 'calc(44px + 72px) 0 24px',
  },
});
const HeroContentWrapper = styled('div', {
  width: '100%',
  position: 'relative',
  display: 'flex',

  '@bp1': {
    flexDirection: 'column',
    alignItems: 'center',
  },

  '.hero-button-container': {
    display: 'flex',
    '@bp1': {
      justifyContent: 'center',
    },
    '@bp4': {
      flexDirection: 'column',
    },
    '.hero-try-demo': {
      marginBottom: '$12',
      '@bp4': {
        marginBottom: '$4',
      },
    },

    '.hero-quick-start': {
      marginBottom: '$12',
      marginLeft: '$4',
      '@bp4': {
        marginLeft: 0,
      },
    },
  },


  '.hero-content': {
    maxWidth: 600,
    textAlign: 'left',
    '@bp1': {
      textAlign: 'center',
    },
  },

  '.hero-banner': {
    height: 'auto',
    width: '72%',
    aspectRatio: 'auto',
    position: 'absolute',
    right: '-36%',
    '@bp1': {
      position: 'unset',
      width: '90%',
    },
    '@bp2': {
      width: '100%',
    },
  },
});

export { HeroStyle, HeroContentWrapper };
