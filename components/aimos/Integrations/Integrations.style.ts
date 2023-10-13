import { styled } from 'styles';
import { Container } from 'styles/foundations';
import ExportedImage from 'next-image-export-optimizer';

const IntegrationsSection = styled('section', {
  position: 'relative',
  overflow: 'hidden',
  padding: '150px 0',
  '@bp1': {
    padding: '80px 0 24px',
  },
});

const IntegrationsContainer = styled(Container, {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  '@bp1': {
    flexDirection: 'column',
  },
});

const IntegrationsContainerLeft = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '500px',
  '@bp1': {
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
    '@bp1': {
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
const IntegrationsListImage = styled(ExportedImage, {
  width: '50%',
  maxWidth: '540px',
  height: 'auto',
  '@bp1': {
    marginTop: '$7',
    width: '100%',
  },
  '@bp4': {
    display: 'none',
  },
});

const IntegrationsDotsImg = styled(ExportedImage, {
  objectFit: 'cover',
  zIndex: -1,
});

export {
  IntegrationsSection,
  IntegrationsContainer,
  IntegrationsListImage,
  IntegrationsContainerLeft,
  IntegrationsDotsImg,
};
