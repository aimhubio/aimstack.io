import { styled } from 'styles';

const AccordionContainer = styled('div', {
  border: '1px solid #ddd',
  borderRadius: '5px',
  marginBottom: '1rem',
});

const AccordionHeader = styled('button', {
  backgroundColor: '#f7f7f7',
  padding: '10px',
  border: 'none',
  textAlign: 'left',
  width: '100%',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#eaeaea',
  },
});

const AccordionContent = styled('div', {
  padding: '10px',
  variants: {
    open: {
      true: {
        display: 'block', // Show content when open
      },
      false: {
        display: 'none', // Hide content when closed
      },
    },
  },
});

export {
  AccordionContainer,
  AccordionHeader,
  AccordionContent,
};