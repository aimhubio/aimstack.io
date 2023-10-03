import { styled } from 'styles';
import { Container } from 'styles/foundations';

const IntegrationsSection = styled('section', {
  backgroundImage: 'url(/images/static/integrations/dots.png)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  overflow: 'hidden',
  padding: '130px 0',
  '@bp2': {
    padding: '80px 0 24px',
  },
});

const IntegrationsContainer = styled(Container, {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  '@bp2': {
    flexDirection: 'column',
  },
});

const IntegrationsContainerLeft = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '500px',
  '@bp2': {
    textAlign: 'center',
    alignItems: 'center',
  },
  '.integrations-title': {
    marginBottom: '$6',
    fontWeight: 800,
  },
  '.integrations-subtitle': {
    lineHeight: '30px',
    marginBottom: '$14',
    '@bp2': {
      marginBottom: '$11',
    },
  },
  '& a': {
    width: 'fit-content',
    '@bp4': {
      width: '100%',
    },
  },
});
const IntegrationsList = styled('div', {
  maxWidth: '540px',
  '@bp2': {
    marginTop: '$7',
    maxWidth: '100%',
    width: '80%',
  },
  '@bp4': {
    display: 'none',
  },
  img: {
    width: '100%',
    height: 'auto',
  },
});

export {
  IntegrationsSection,
  IntegrationsContainer,
  IntegrationsList,
  IntegrationsContainerLeft,
};
