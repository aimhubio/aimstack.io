import { styled } from 'styles';
import ExportedImage from 'next-image-export-optimizer';

const HeroSection = styled('section', {
  backgroundImage:
    'url(/images/static/hero/dots.svg), url(/images/static/hero/bg.svg)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover, contain',
  backgroundPosition: 'center, right',
  position: 'relative',
  height: '100%',
  minHeight: '100vh',
  display: 'flex',
  textAlign: 'center',
  overflow: 'hidden',
  padding: '150px 0',
  '@bp1': {
    padding: '120px 0',
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
    height: '100%',
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
      '@bp4': {
        marginBottom: '$4',
      },
    },
    '.hero-quick-start': {
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

const HeroBannerImg = styled(ExportedImage, {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  right: '-300px',
  borderRadius: '12px',
  border: '1px solid #D8DADF',
  width: '866px',
  height: 'auto',
  aspectRatio: 'auto',
  '@bp0': {
    width: '700px',
  },
  '@bp1': {
    position: 'unset',
    transform: 'unset',
    width: '500px',
    marginTop: '$12',
  },
  '@bp2': {
    width: '90%',
  },
  '@bp4': {
    display: 'none',
  },
});

export { HeroSection, HeroContentWrapper, HeroBannerImg };
