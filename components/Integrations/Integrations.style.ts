import { styled } from 'styles';

const IntegrationsStyle = styled('section', {
  height: '150px',
  display: 'flex',
  backgroundColor: '$white500',
  boxShadow: '$1',
});
const Slider = styled('div', {});
const SliderItem = styled('a', {
  display: 'flex',
  alignItems: 'center',
  overflow: 'visible !important',

  img: {
    width: '95px !important',
  },
});

export { IntegrationsStyle, Slider, SliderItem };
