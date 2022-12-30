import { styled } from 'styles';

const LayoutStyle = styled('main', {
  position: 'relative',

  '.bg-top': {
    zIndex: '2',
  },
  '.bg-bottom': {
    zIndex: '1',
    position: 'absolute',
    bottom: '300px',
    left: '0',
    right: '0',
    objectFit: 'contain',
    width: '100%',
    height: '60%',
  },
});

const Wrapper = styled('div', {
  position: 'relative',
  zIndex: '3',
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
});

const Content = styled('div', {
  flex: '1',
});

export { LayoutStyle, Wrapper, Content };
