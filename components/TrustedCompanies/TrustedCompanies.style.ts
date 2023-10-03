import { styled } from 'styles';


const TrustedCompaniesContainer = styled('div', {
  padding: '80px 0',
  '@bp1': {
    padding: '60px 0',
  },
  '@bp2': {
    padding: '60px 0 24px',
  },
});


const TrustedCompaniesSection = styled('section', {
  height: '110px',
  display: 'flex',
  backgroundColor: 'white',
});
const Slider = styled('div', {
  backgroundColor: 'white',
});
const SliderItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  overflow: 'visible !important',
  img: {
    width: '160px !important',
  },
});

export { TrustedCompaniesContainer, Slider, SliderItem, TrustedCompaniesSection };
