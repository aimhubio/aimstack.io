import { styled } from '@stitches/react';

// Styled components for the page
const GetStartedContainer = styled('div', {
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 20px',
});

const Section = styled('section', {
  padding: '30px 0',
  borderBottom: '1px solid $gray300',
  '&:last-child': {
    borderBottom: 'none',
  },
});

const ButtonGroup = styled('div', {
  display: 'flex',
  gap: '16px',
  flexWrap: 'wrap',
  marginTop: '24px',
  justifyContent: 'center',
  '@media (min-width: 768px)': {
    justifyContent: 'flex-start',
  },
});

export { GetStartedContainer, Section, ButtonGroup };