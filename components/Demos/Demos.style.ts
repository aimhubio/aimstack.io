import { styled } from 'styles';

const DemosStyle = styled('section', {
  padding: '44px 0 100px',
  backgroundColor: '$darkBlue',
  color: '$white',

  '@bp1': {
    padding: '44px 0 26px',
  },
});

const DemosList = styled('ul', {
  display: 'flex',
  flexWrap: 'wrap',
  marginLeft: '-24px',

  '@bp1': {
    marginLeft: '-54px',
  },

  '@bp3': {
    marginLeft: '0',
  },
});

const DemosItem = styled('li', {
  width: 'calc((100% / 4) - 24px)',
  marginLeft: '24px',
  marginBottom: '24px',

  '& a': {
    backgroundColor: '$bigStone',
    display: 'block',
    height: '100%',
    borderRadius: '$1',
    transition: '$main',

    '& .inner': {
      padding: '$6',
    },

    '&:hover': {
      backgroundColor: '$bigStoneHover',
    },
  },
  '& img': {
    display: 'block',
    borderRadius: '$1 $1 0 0',
  },

  '@bp1': {
    width: 'calc((100% / 2) - 54px)',
    marginLeft: '54px',
    marginBottom: '54px',
  },
  '@bp3': {
    width: '100%',
    marginLeft: '0',
    marginBottom: '24px',
  },
});

export { DemosStyle, DemosList, DemosItem };
