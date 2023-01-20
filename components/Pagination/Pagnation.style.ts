import { styled } from 'styles';

const PaginationStyle = styled('nav', {
  my: '$10',
});

const PaginationList = styled('ul', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  li: {
    height: '44px',
    width: '44px',
    fontSize: '$1',
    fontWeight: '$4',
    textAlign: 'center',
    marginRight: '$1',

    a: {
      display: 'block',
      lineHeight: '44px',
      transition: '$main',

      '&.active': {
        backgroundColor: '$primary',
        color: '$white',
      },

      '&:hover': {
        '&:not(.active)': {
          color: '$primary',
        },
        '.icon': {
          fill: '$primary',
        },
      },
    },
  },
});

export { PaginationStyle, PaginationList };
