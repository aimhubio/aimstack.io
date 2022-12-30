import { styled } from 'styles';

const SubscribeStyle = styled('section', {
  padding: '100px 0',

  '.input': {
    maxWidth: '400px',
  },

  '@bp1': {
    padding: '80px 0',
    textAlign: 'center',
    '.input': {
      margin: '0 auto',
    },
  },

  '@bp2': {
    padding: '60px 0',
  },
});
const SubscribeInner = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const Left = styled('div', {
  flex: '1',
  marginRight: '80px',

  '@bp1': {
    marginRight: '0',
  },
});

const Right = styled('div', {
  flex: '1',

  '@bp1': {
    display: 'none',
  },
});

export { SubscribeStyle, SubscribeInner, Left, Right };
