import { styled } from 'styles';
import { Container } from '../../styles/foundations';

const FooterSection = styled('footer', {
  overflow: 'hidden',
  width: '100%',
  height: 'auto',
  paddingTop: '100px',
  display: 'flex',
  flexDirection: 'column',
  '.footer-bg': {
    width: '100%',
  },
});

const FooterSectionInner = styled('div', {
  minHeight: '200px',
  display: 'flex',
  flexDirection: 'column',
  backgroundImage: 'linear-gradient(33deg, #00BCD4 -83.01%, #673AB7 65.72%)',
});

const FooterSectionContainer = styled(Container, {
  marginTop: 'auto',
});

const FooterTop = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  color: '$white',
  py: '27px',
  borderBottom: '1px solid $white100',
});

const Logo = styled('div', {
  marginRight: '$9',
  img: {
    display: 'block',
    '@bp2': {
      margin: '0 auto',
    },
  },
  '@bp0': {
    marginRight: '$6',
  },
  '@bp2': {
    width: '100%',
    marginRight: '0',
    marginBottom: '$1',
    textAlign: 'center',
  },
});

const FooterList = styled('ul', {
  display: 'flex',
  marginRight: 'auto',
  li: {
    '&:not(:last-child)': {
      marginRight: '$9',
      '@bp0': {
        marginRight: '$4',
      },
    },
    transition: '$main',
    '&:hover': {
      opacity: '.6',
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
      '&:not(:last-child)': {
        marginRight: '0',
      },
    },
  },
});

const FooterSocial = styled('ul', {
  display: 'flex',
  li: {
    '&:not(:last-child)': {
      marginRight: '$6',
    },
    a: {
      transition: '$main',
      '&:hover': {
        opacity: '.6',
      },
    },
  },
  '@bp2': {
    margin: '0 auto',
    order: '3',
  },
});

const FooterBottom = styled('div', {
  py: '$4',
  color: '$white500',
  textAlign: 'center',
});

export {
  FooterSection,
  FooterSectionContainer,
  FooterSectionInner,
  FooterTop,
  FooterBottom,
  FooterList,
  Logo,
  FooterSocial,
};
