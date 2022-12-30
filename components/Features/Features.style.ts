import { styled } from 'styles';

const FeaturesStyle = styled('section', {
  py: '150px',

  '.title': {
    textAlign: 'center',
    marginBottom: '100px',
  },

  '@bp1': {
    py: '80px',

    '.title': {
      marginBottom: '64px',
    },
  },

  '@bp2': {
    py: '60px',
    '.title': {
      marginBottom: '44px',
    },
  },
});
const StepRow = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  '.title-mobile': {
    display: 'none',
  },
  '@bp1': {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    '.title-mobile': {
      display: 'block',
      width: '100%',
    },
  },
  '@bp2': {
    flexDirection: 'column',
    marginBottom: '60px',
  },
});
const Left = styled('div', {
  '& ul': {
    '& li': {
      marginBottom: '$4',
      position: 'relative',
      paddingLeft: '16px',

      '&:before': {
        content: '•',
        position: 'absolute',
        left: '0',
        top: '-5px',
        fontSize: '24px',
        color: '$secondary',
      },
    },
    '@bp1': {
      paddingTop: '$4',
    },
  },

  '@bp1': {
    maxWidth: '280px',
    width: '100%',
    '.title-desktop': {
      display: 'none',
    },
  },
  '@bp2': {
    maxWidth: '100%',
    order: '2',
  },
});
const Right = styled('div', {
  maxWidth: '610px',
  width: '100%',
  position: 'relative',

  img: {
    width: '100%',
    height: 'auto',
  },

  '@bp1': {
    maxWidth: '396px',
    marginLeft: '0',
  },
  '@bp2': {
    maxWidth: '100%',
    order: '1',
  },
});

const ButtonLink = styled('a', {
  display: 'flex',
  alignItems: 'center',
  color: '$primary',
  fontFamily: '$OpenSans600',
  textDecoration: 'none',

  '& .icon': {
    fill: '$primary',
    marginLeft: '$4',
  },
});

export { FeaturesStyle, StepRow, Left, Right, ButtonLink };
