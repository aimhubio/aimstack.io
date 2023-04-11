import { styled } from 'styles';

const TrustedCompaniesContainer = styled('section', {
  height: '110px',
  display: 'flex',
  backgroundColor: 'white',
  boxShadow: '$5',
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

export { TrustedCompaniesContainer, Slider, SliderItem };
