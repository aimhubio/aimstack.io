import { styled } from 'styles';

const AboutHero = styled('section', {
  textAlign: 'center',
  py: '80px',
});
const Culture = styled('section', {
  py: '80px',
  color: '$white',
  backgroundColor: '$darkBlue',
  position: 'relative',

  '@bp1': {
    py: '44px',
  },
});

const CultureLeft = styled('div', {
  flex: '1',
});

const CultureList = styled('ul', {
  display: 'flex',
  flexWrap: 'wrap',
  marginLeft: '-60px',
  marginTop: '60px',

  '@bp2': {
    marginLeft: '0',
    marginTop: '$8',
  },
});

const CultureItem = styled('li', {
  width: 'calc((100% / 2) - 60px)',
  marginLeft: '60px',
  marginBottom: '60px',

  '@bp2': {
    width: '100%',
    marginLeft: '0',
    marginBottom: '$10',
  },
});

const CultureRight = styled('div', {
  maxWidth: '650px',

  img: {
    width: '100%',
    height: 'auto',
  },

  '@bp1': {
    margin: '0 auto',
  },
});

const JoinTeam = styled('section', {
  py: '80px',
  textAlign: 'center',
});
const JoinTeamButton = styled('a', {
  display: 'inline-block',
  border: '2px solid $black',
  borderRadius: '$1',
  padding: '14px 26px',

  span: {
    display: 'block',
    fontWeight: '600',
    fontSize: '$3',
    paddingTop: '$2',
  },
});

export {
  AboutHero,
  Culture,
  CultureLeft,
  CultureList,
  CultureItem,
  CultureRight,
  JoinTeam,
  JoinTeamButton,
};
