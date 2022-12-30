import { styled } from 'styles';

const InputStyle = styled('div', {
  position: 'relative',
  display: 'block',

  '.error-message': {
    position: 'absolute',
    top: '100%',
    transform: 'translateY(2px)',
    color: '$danger',
    fontSize: '20px',
    paddingLeft: ' 12px',
  },

  input: {
    border: 'none',
    borderRadius: '$1',
    width: '100%',
  },

  variants: {
    size: {
      1: {
        input: {
          padding: '17px 24px',
          fontSize: '$2',
          backgroundColor: '$lightGrey',
        },
      },
    },
  },

  defaultVariants: {
    size: 1,
  },
});

export { InputStyle };
