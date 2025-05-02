import { styled } from 'styles';

const PricingIntroStyle = styled('section', {
  py: '80px',

  '.pricing': {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    padding: '1rem',
  },

  '.tier, .tierHighlighted': {
    flex: 1,
    borderRadius: '0.75rem',
    padding: '1.5rem 1.5rem',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
    minHeight: '320px',
  },

  '.tier': {
    background: '#FAFAFA',
  },

  '.tierHighlighted': {
    background: 'linear-gradient(90deg, #673AB7 0%, #5865F2 100%)',
    color: 'white',
  },

  '.tier *, .tierHighlighted *': {
    textAlign: 'left',
  },

  '.tier h2:first-of-type, .tierHighlighted h2:first-of-type': {
    marginBottom: '0.5rem',
    fontSize: '1.4rem',
    fontWeight: 'bold',
  },

  '.tier p:first-of-type, .tierHighlighted p:first-of-type': {
    marginBottom: '1rem',
    fontSize: '0.9rem',
    lineHeight: '1.3',
    minHeight: '2.5rem',
  },

  '.priceContainer': {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '0.75rem',
    marginBottom: '0.75rem',
  },

  '.annualPrice .priceAmount': {
    fontSize: '1.7rem',
    fontWeight: 'bold',
    marginBottom: '0.1rem',
  },

  '.monthlyPrice .priceAmount': {
    fontSize: '0.85rem',
    fontWeight: '500',
    marginBottom: '0.1rem',
    opacity: 0.9,
  },

  '.priceDesc': {
    fontSize: '0.85rem',
  },

  '.tier a, .tierHighlighted a': {
    width: '100%',
    marginTop: 'auto',
    textAlign: 'center',
    fontSize: '0.9rem',
    fontWeight: '500',
  },

  '.price': {
    fontSize: '1.7rem',
    fontWeight: 'bold',
    margin: '1rem 0',
    opacity: 0.8,
  },

  '@media (max-width: 900px)': {
    py: '60px',
    '.pricing': {
      flexDirection: 'column',
      gap: '1rem',
    },
    '.tier, .tierHighlighted': {
      minHeight: 'auto',
      padding: '1.5rem 1.25rem',
    }
  },
});

export { PricingIntroStyle };