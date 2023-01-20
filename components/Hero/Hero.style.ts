import { styled } from 'styles';

const HeroStyle = styled('section', {
  padding: '80px 0 64px',
  textAlign: 'center',

  '@bp1': {
    padding: '44px 0',
  },

  '@bp2': {
    padding: '44px 0 24px',
  },
});
const HeroContent = styled('div', {
  maxWidth: '948px',
  width: '100%',
  mx: 'auto',
  position: 'relative',

  '.github-btn': {
    position: 'absolute',
    bottom: '0',
    left: '50%',
    translate: '-50% 0'
  }
});

export { HeroStyle, HeroContent };
