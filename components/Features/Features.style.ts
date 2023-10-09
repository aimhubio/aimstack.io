import ExportedImage from 'next-image-export-optimizer';
import { styled } from 'styles';
import { Container } from 'styles/foundations';

const FeaturesSection = styled('section', {
  position: 'relative',
  overflow: 'hidden',
  padding: '150px 0',
  '@bp2': {
    padding: '80px 0 24px',
    textAlign: 'center',
  },
  '.features-title': {
    marginBottom: '$6',
    fontWeight: 800,
    '@bp2': {
      textAlign: 'center',
    },
  },
  '.features-subtitle': {
    lineHeight: '30px',
    marginBottom: '$14',
    '@bp2': {
      marginBottom: '$11',
    },
  },
});

const FeaturesContainer = styled(Container, {
  display: 'flex',
  flexDirection: 'column',
});

const FeaturesContainerHeader = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '600px',
  margin: '0 auto',
  textAlign: 'center',
  '@bp2': {
    maxWidth: '100%',
  },
});

const FeaturesContainerContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '100%',
});

const ComingSoonContainerContent = styled('div', {
  borderTop: '1px solid #E4E7EB',
  display: 'flex',
  alignItems: 'flex-start',
  width: '100%',
  '@bp2': {
    flexDirection: 'column',
  },
  '.step-coming-soon': {
    flex: 1,
    maxWidth: '360px',
    paddingRight: '40px',
    marginRight: '60px',
    padding: '60px 0',
    '@bp2': {
      paddingRight: 0,
      marginRight: 0,
    },
  },
});

const Step = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingBottom: '120px',
  '@bp2': {
    flexDirection: 'column',
  },
});

const StepContent = styled('div', {
  width: '400px',
  minWidth: '300px',
  '@bp2': {
    width: '100%',
  },
  '.step-title': {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'left',
    marginBottom: '$6',
    '.badge': {
      color: '$white',
      fontSize: '10px',
      padding: '6px 4px',
      background: '#5865F2',
      borderRadius: '4px',
      marginLeft: '$4',
    },
  },
  '.step-description': {
    marginBottom: '$5',
    '@bp2': {
      textAlign: 'left',
    },
  },
  '& ul': {
    '@bp2': {
      textAlign: 'left',
    },
    '& li': {
      marginBottom: '$3',
      position: 'relative',
      paddingLeft: '24px',
      '&:before': {
        content: '•',
        position: 'absolute',
        left: '0',
        top: '-5px',
        fontSize: '24px',
        color: '#5865F2',
      },
    },
  },
});

const StepBannerImage = styled(ExportedImage, {
  maxWidth: '600px',
  minWidth: '300px',
  height: 'auto',
  display: 'block',
  marginLeft: '60px',
  '@bp2': {
    display: 'none',
  },
  '&.step-banner-image-mobile': {
    display: 'none',
    '@bp2': {
      margin: '0 auto $10',
      display: 'block',
      minWidth: 'unset',
      width: '100%',
    },
  },
});

const FeaturesDotsImg = styled(ExportedImage, {
  objectFit: 'contain',
  zIndex: -1,
});

export {
  FeaturesSection,
  FeaturesContainer,
  FeaturesContainerHeader,
  FeaturesContainerContent,
  ComingSoonContainerContent,
  Step,
  StepContent,
  StepBannerImage,
  FeaturesDotsImg,
};
