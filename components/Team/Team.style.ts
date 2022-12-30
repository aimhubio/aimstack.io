import { styled } from 'styles';

const TeamStyle = styled('section', {
  textAlign: 'center',
  paddingTop: '100px',
});

const TeamList = styled('ul', {
  display: 'flex',
  flexWrap: 'wrap',
  marginLeft: '-40px',
  marginTop: '100px',

  '@bp1': {
    justifyContent: 'center',
  },

  '@bp2': {
    marginLeft: '0',
  },
});

const TeamItem = styled('li', {
  width: 'calc((100% / 4) - 40px)',
  marginLeft: '40px',
  marginBottom: '60px',

  '@bp1': {
    width: 'calc((100% / 2) - 40px)',
    marginBottom: '40px',
  },
  '@bp2': {
    width: '100%',
    marginLeft: '0',
  },

  '.card-content': {
    marginTop: '$6',
    '@bp2': {
      textAlign: 'left',
      marginTop: '0',
    },
  },
});

const TeamImage = styled('div', {
  maskSize: '100%',
  WebkitMaskRepeat: 'no-repeat',

  img: {
    objectFit: 'contain',
    height: '100%',
    width: '100%',
  },

  '@bp2': {
    width: '100px',
    minWidth: '100px',
    marginRight: '$6',
  },
});

export { TeamStyle, TeamItem, TeamList, TeamImage };
