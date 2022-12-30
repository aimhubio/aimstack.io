import { styled } from 'styles';

const FooterStyle = styled('footer', {
  backgroundColor: '$darkBlue',
});

const FooterTop = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  color: '$white',
  py: '27px',
  borderBottom: '1px solid $white100',
});

const Logo = styled('div', {
  marginRight: '$9',
  '@bp2': {
    width: '100%',
    marginRight: '0',
    marginBottom: '$1',
    textAlign: 'center',
  },
});

const FooterList = styled('ul', {
  display: 'flex',

  li: {
    cursor: 'pointer',
    marginRight: '$9',

    '@bp0': {
      marginRight: '$4',
    },
  },

  '@bp1': {
    order: '3',
    width: '100%',
    marginTop: '$7',

    li: {
      '&:last-child': {
        marginRight: '0',
      },
    },
  },

  '@bp2': {
    order: '2',
    width: '100%',
    marginBottom: '$2',
    flexDirection: 'column',
    textAlign: 'center',
    li: {
      marginBottom: '$6',
      marginRight: '0',
    },
  },
});

const FooterSocial = styled('ul', {
  display: 'flex',
  marginLeft: 'auto',

  li: {
    cursor: 'pointer',
    '&:not(:last-child)': {
      marginRight: '$6',
    },
  },

  '@bp2': {
    marginRight: 'auto',
    order: '3',
  },
});

const FooterBottom = styled('div', {
  py: '$4',
  color: '$white500',
  textAlign: 'center',
});

export { FooterStyle, FooterTop, FooterBottom, FooterList, Logo, FooterSocial };
