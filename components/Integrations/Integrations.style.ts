import { styled } from 'styles';
import { Container } from 'styles/foundations';

const IntegrationsContainer = styled(Container, {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  py: '150px',
  '@bp1': {
    py: '80px',
  },
  '@bp2': {
    py: '60px',
    flexDirection: 'column',
  },
});

const IntegrationsContainerLeft = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '500px',
  '& .Text_highlight': {
    backgroundColor: 'white',
    boxShadow: '0px 2px 4px 0px rgba(11, 47, 97, 0.2)',
    borderRadius: '4px',
    height: '24px',
    padding: '0 4px',
    color: '#D02F61',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  '& a': {
    width: 'fit-content',
  },
  '@bp2': {
    '& h3, a': {
      textAlign: 'center',
    },
    '& a': {
      margin: '$7 auto 0',
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
});

export { IntegrationsContainer, IntegrationsList, IntegrationsContainerLeft };
