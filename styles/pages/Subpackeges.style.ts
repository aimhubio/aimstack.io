import { styled } from 'styles';

const Subpackeges = styled('div', {

});
const SubpackegesHeader = styled('section', {
  color: '$white',
  backgroundColor: '$darkBlue',
  py: '60px',

  '@bp2': {
    py: '40px',
  },

  '.logo': {
    minWidth: '45px',
    width: '45px',
    height: 'auto',
  },

  '.org': {
    paddingLeft: '24px'
  },
  '.org-name': {
    display: 'flex',
    alignItems: 'center',
    fontSize: '40px',

    '@bp2': {
      'p, span': {
        fontSize: '$5',
      },
    },

    ':not(span)': {
      color: '$primary'
    },

    span: {
      padding: '0 8px'
    }
  },

  '.highlight': {
    maxWidth: '428px',
    width: '100%',

    '@bp1': {
      marginTop: '30px'
    },

    '.hljs': {
      marginBottom: '0'
    }
  }
});

const MainContent = styled('section', {
  width: 'calc(100% - 286px)',
  padding: '0 30px',
  borderLeft: '1px solid $grey',
  borderRight: '1px solid $grey',

  '@bp1': {
    width: '100%',
    border: 'none',
    padding: '0px'
  }
});

const SideBar = styled('aside', {
  width: '286px',
  padding: '30px',
  borderRight: '1px solid $grey',

  '@bp1': {
    width: '100%',
    border: 'none',
    padding: '30px 0 0'
  }
});

const Badges = styled('div', {
  borderTop: '1px solid $grey',
  marginTop: '24px',
  paddingTop: '24px',
  paddingBottom: '24px',

  '@bp1': {

    borderBottom: '1px solid $grey'
  }
});

export { Subpackeges, SubpackegesHeader, MainContent, SideBar, Badges };
