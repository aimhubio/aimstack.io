import { styled } from 'styles';
import ExportedImage from 'next-image-export-optimizer';

const DemosSection = styled('section', {
  backgroundImage: 'linear-gradient(transparent, #d0cafe40, transparent)',
  position: 'relative',
  overflow: 'hidden',
  padding: '150px 0',
  '@bp2': {
    padding: '80px 0 24px',
  },
  '.demos-title': {
    textAlign: 'center',
    marginBottom: '$6',
  },
  '.demos-subtitle': {
    textAlign: 'center',
    marginBottom: '$14',
  }
});

const DemosList = styled('ul', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
  gap: '16px',
  '@bp1': {
    gridTemplateColumns: 'repeat(2,minmax(0,1fr))',
  },
  '@bp2': {
    gridTemplateColumns: 'repeat(2,minmax(0,1fr))',
  },
  '@bp3': {
    gridTemplateColumns: 'repeat(1,minmax(0,1fr))',
  },
});

const DemosItem = styled('li', {
  minWidth: '260px',
  height: '340px',
  display: 'inline-flex',
  '@bp3': {
    width: '100%',
    maxWidth: '360px',
    margin: '0 auto',
  },
  '& a': {
    display: 'block',
    width: '100%',
    height: '100%',
    borderRadius: '$1',
    transition: '$main',
    border: '1px solid #E2D7EB',
    backgroundColor: '$white',
    '& .demo-inner': {
      padding: '$5 $6',
    },
    '&:hover': {
      backgroundColor: '$bigStoneHover',
      '& .demo-inner': {
        color: '$white',
      },
    },
  },
});

const DemoImg = styled(ExportedImage, {
  width: '100%',
  height: '66%',
  display: 'block',
  borderRadius: '$1 $1 0 0',
  objectFit: 'cover',
  padding: "10px",
  overflow: 'hidden',
});

const DemosDotsImg = styled(ExportedImage, {
  objectFit: 'cover',
  zIndex: -1,
});

export { DemosSection, DemosList, DemosItem, DemosDotsImg, DemoImg};
