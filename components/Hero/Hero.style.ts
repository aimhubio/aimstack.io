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
});

export { HeroStyle, HeroContent };
