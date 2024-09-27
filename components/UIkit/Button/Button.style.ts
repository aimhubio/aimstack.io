import { styled } from 'styles';

const ButtonStyle = styled('button', {
  // mini reset
  appearance: 'none',
  border: 'none',
  backgroundColor: 'transparent',
  lineHeight: 1,
  cursor: 'pointer',
  borderRadius: '$1',
  display: 'inline-block',
  transition: '$main',

  variants: {
    size: {
      1: {
        height: '53px',
        lineHeight: '53px',
        fontSize: '$3',
        px: '$6',
        '@bp1': {
          height: '50px',
          lineHeight: '50px',
        },
      },
      2: {
        height: '32px',
        lineHeight: '32px',
        fontSize: '$1',
        px: '$2',
      },
    },
    variant: {
      primary: {
        backgroundColor: '$primary',
        color: '$white',
        '&:hover': {
          backgroundColor: '$primaryHover',
        },
      },
      secondary: {
        backgroundColor: '$primaryLight',
        color: '$primary',
        '&:hover': {
          backgroundColor: '$primaryLightHover',
        },
      },
      secondary_outline: {
        backgroundColor: '$white',
        color: '$primary',
        border: '1px solid $primary',
        '&:hover': {
          backgroundColor: '$primaryLightHover',
        },
      },
      community: {
        backgroundColor: '#5865F2',
        color: '$white',
        border: '1px solid #5865F2',
      },
      outline: {
        backgroundColor: '$white',
        color: '#5865F2',
        border: '1px solid #5865F2',
        '&:hover': {
          backgroundColor: '#DEE0FC',
          borderColor: '$primaryHover',
        },
      },
      ghost: {
        backgroundColor: 'transparent',
        color: '#5865F2',
        '&:hover': {
          backgroundColor: '#DEE0FC',
        },
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 1,
  },
});

export { ButtonStyle };
