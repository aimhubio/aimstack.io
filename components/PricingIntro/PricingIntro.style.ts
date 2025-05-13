import { styled } from 'styles';

const PricingIntroStyle = styled('section', {
  py: '80px',

  '.pricing': {
    display: 'flex',
    justifyContent: 'center',
    gap: '16px',
    padding: '16px',
  },

  '.tier, .tierHighlighted': {
    flex: 1,
    borderRadius: '12px',
    padding: '24px 34px',
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
    marginBottom: '8px',
    fontSize: '24px',
    fontWeight: 'bold',
  },

  '.tier p:first-of-type, .tierHighlighted p:first-of-type': {
    marginBottom: '16px',
    fontSize: '14px',
    lineHeight: '1.3',
    minHeight: '40px',
  },

  '.priceContainer': {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '12px',
    marginBottom: '12px',
  },

  '.annualPrice .priceAmount': {
    fontWeight: 'bold',
    marginBottom: '1.6px',
    display: 'flex',
    alignItems: 'baseline',
    position: 'relative',
    paddingLeft: '16px',

    '& .digits': {
      fontSize: '48px',
      lineHeight: 1,
    },

    '& .text': {
      fontSize: '24px',
      alignSelf: 'flex-end',
    },

    '& .currency': {
      fontSize: '24px',
      marginRight: '2px',
      marginTop: '4px',
      position: 'absolute',
      top: '0',
      left: '0',
    },
  },

  '.monthlyPrice .priceAmount': {
    fontSize: '14px',
    fontWeight: '500',
    marginBottom: '1.6px',
    opacity: 0.9,
  },

  '.priceDesc': {
    fontSize: '14px',
  },

  '.tier a, .tierHighlighted a': {
    width: '100%',
    marginTop: 'auto',
    textAlign: 'center',
    fontWeight: '500',
  },

  '.price': {
    fontSize: '27px',
    fontWeight: 'bold',
    margin: '16px 0',
    opacity: 0.8,
  },

  '@media (max-width: 900px)': {
    py: '60px',
    '.pricing': {
      flexDirection: 'column',
      gap: '16px',
    },
    '.tier, .tierHighlighted': {
      minHeight: 'auto',
      padding: '24px 20px',
    }
  },
});

// Create a Switch component for toggling between monthly and yearly pricing
const PricingSwitch = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto 40px',

  '.toggle': {
    display: 'flex',
    alignItems: 'center',
    borderRadius: '30px',
    padding: '0px',
    position: 'relative',
    cursor: 'pointer',
    border: '1px solid #E0E0E0',
    backgroundColor: '#F5F5F5',
  },

  '.toggle-option': {
    position: 'relative',
    zIndex: 1,
    padding: '10px 24px',
    fontSize: '14px',
    fontWeight: 500,
    color: '#666',
    transition: 'color 0.3s ease',
    textAlign: 'center',
    width: '160px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    borderRadius: '30px',

    '&.active': {
      color: '#000000',
      fontWeight: 600,
      backgroundColor: 'white',
      border: '1px solid #5865F2',
    }
  },

  '.save-text': {
    padding: '2px 5px',
    borderRadius: '10px',
    fontSize: '10px',
    color: '#5865F2',
    backgroundColor: 'rgba(104, 139, 221, 0.2)',
    fontWeight: 'bold',
    display: 'inline-block',
    whiteSpace: 'nowrap',
  }
});


export { PricingIntroStyle, PricingSwitch };