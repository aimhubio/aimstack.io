import { styled } from 'styles';
import ExportedImage from 'next-image-export-optimizer';

const HeroSection = styled('section', {
  position: 'relative',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',
  overflow: 'hidden',
  padding: '200px 0',
  '@bp1': {
    padding: '132px 0',
  },
  '@bp2': {
    padding: '120px 0 24px',
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
    maxWidth: 550,
    minWidth: 550,
    textAlign: 'left',
    '@bp1': {
      textAlign: 'center',
      minWidth: 'unset',
    },
  },
});

const HeroBg = styled(ExportedImage, {
  objectFit: 'contain',
  objectPosition: 'right'
});

const HeroBgDots = styled(ExportedImage, {
  objectFit: 'cover'
});

const HeroBannerImg = styled(ExportedImage, {
  position: 'absolute',
  width: '72%',
  minWidth: '72%',
  height: 'auto',
  right: '-30%',
  borderRadius: '12px',
  border: '1px solid #D8DADF',
  aspectRatio: 'auto',
  '@bp1': {
    position: 'unset',
    width: '90%',
  },
  '@bp2': {
    width: '100%',
  },
  '@bp4': {
    display: 'none'
  },
});

export { HeroSection, HeroContentWrapper, HeroBannerImg, HeroBg, HeroBgDots };
