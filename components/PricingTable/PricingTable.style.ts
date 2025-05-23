import { styled } from 'styles';

// Toggle Switch component
const Switch = styled('label', {
  position: 'relative',
  display: 'inline-block',
  width: '60px',
  height: '30px',
  margin: '0 10px',

  '& input': {
    opacity: 0,
    width: 0,
    height: 0,
  },

  '.slider': {
    position: 'absolute',
    cursor: 'pointer',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#ccc',
    transition: '.4s',
    borderRadius: '34px',

    '&:before': {
      position: 'absolute',
      content: '""',
      height: '22px',
      width: '22px',
      left: '4px',
      bottom: '4px',
      backgroundColor: 'white',
      transition: '.4s',
      borderRadius: '50%',
    }
  },

  'input:checked + .slider': {
    backgroundColor: '#673AB7',
  },

  'input:checked + .slider:before': {
    transform: 'translateX(30px)',
  }
});

// Toggle container with labels
const BillingToggle = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', // This centers all content
  justifyContent: 'center',
  marginBottom: '$6',
  
  // Add variant for left alignment
  variants: {
    align: {
      left: {
        alignItems: 'flex-start',
      }
    }
  }
});

const ToggleRow = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center', // This centers the toggle row
  marginBottom: '8px',
  
  // Add variant for left alignment
  variants: {
    align: {
      left: {
        justifyContent: 'flex-start',
      }
    }
  }
});

const PriceLabel = styled('span', {
  fontWeight: 500,
  variants: {
    active: {
      true: {
        color: '#000',
      },
      false: {
        color: '#999',
      }
    }
  }
});

// Savings callout badge
const SavingsBadge = styled('div', {
  backgroundColor: 'rgba(104, 139, 221, 0.2)',
  color: '#5865F2',
  padding: '4px 10px',
  borderRadius: '12px',
  fontSize: '10px',
  fontWeight: '600',
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
  marginTop: '8px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center', // This centers the badge text
  
  // Add variant for left alignment
  variants: {
    align: {
      left: {
        justifyContent: 'flex-start',
      }
    }
  }
});

// Header cell content container for consistent layout
const HeaderContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  height: '250px',
  justifyContent: 'space-between',
  padding: '20px 0',
  
  // By default, HeaderContent doesn't have alignment set
  // We need to add this variant
  variants: {
    align: {
      left: {
        alignItems: 'flex-start', // Left aligns everything inside
        paddingLeft: '50px', // Add same padding as table cells have
        paddingRight: '50px',
      },
      center: {
        alignItems: 'center', // Keeps center alignment as an option
      }
    },
  },

  // Fix for mobile view - ensure consistent padding
  '@media (max-width: 768px)': {
    padding: '20px 15px',
  }
});


// Title and pricing container
const PricingInfo = styled('div', {
  textAlign: 'center',
  width: '100%',  // Ensure full width to contain all content

  // Add variant for left alignment
  variants: {
    align: {
      left: {
        textAlign: 'left',
      }
    }
  },

  // Fix for mobile view
  '@media (max-width: 768px)': {
    minHeight: '150px', // Ensure consistent height for pricing info on mobile
  }
});

// Price display component with styled elements and vertical alignment
const PriceDisplay = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '$4',
  fontWeight: 'bold',

  '.currency': {
    marginRight: '2px',
    marginTop: '4px',
    fontSize: '24px',
    alignSelf: 'flex-start',
  },
  '.digits': {
    fontSize: '48px',
    lineHeight: '48px',
  },
  '.text': {
    fontSize: '24px',
    alignSelf: 'flex-end',
  },

  // Add variant for left alignment if needed
  variants: {
    align: {
      left: {
        justifyContent: 'flex-start',
      }
    }
  },

  // Fix for mobile view
  '@media (max-width: 768px)': {
    '.digits': {
      fontSize: '40px',
      lineHeight: '40px',
    },
    '.currency, .text': {
      fontSize: '20px',
    }
  }
});

// Button container to align buttons at the bottom
const ButtonContainer = styled('div', {
  marginTop: 'auto',
  display: 'flex',
  justifyContent: 'center',
  width: '100%',

  // Fix for mobile view
  '@media (max-width: 768px)': {
    '& a, & button': {
      width: '100% !important',  // Override inline styles
      whiteSpace: 'nowrap',      // Prevent text wrapping
      overflow: 'hidden',        // Hide overflow
      textOverflow: 'ellipsis',  // Add ellipsis if needed
      padding: '0 10px !important', // Ensure consistent padding
      fontSize: '14px !important', // Slightly smaller font size
    }
  }
});

const PricingTableStyle = styled('table', {
  flex: '1',
  boxShadow: '$4',
  width: '1160px', // Set explicit width
  maxWidth: '100%', // For responsiveness
  margin: '0 auto', // Center the table

  // Add overflow properties for mobile horizontal scrolling
  '@media (max-width: 768px)': {
    display: 'block',
    overflowX: 'auto',
    WebkitOverflowScrolling: 'touch', // Smooth scrolling on iOS
    scrollbarWidth: 'thin',
    '&::-webkit-scrollbar': {
      height: '8px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      borderRadius: '4px',
    },

    // Fix cell widths for mobile
    'th, td': {
      minWidth: '220px', // Ensure minimum width
      boxSizing: 'border-box', // Include padding in width calculation
    },

    'tr:nth-child(even) td:first-child': {
      backgroundColor: '#FAFAFA',
    }
  },

  table: {
    borderCollapse: 'collapse',
    borderRadius: '$2',
    tableLayout: 'fixed',
    marginBottom: '$4',
    display: 'flex',
  },

  'td': {
     width: '290px',
     height: '60px',
     textAlign: 'left',
     verticalAlign: 'middle',
     paddingLeft: '50px',
     paddingRight: '50px',
  },

  'th': {
     width: '290px',
     verticalAlign: 'top', // Align to top so our flex container controls alignment
     position: 'relative', // For potential shadows or effects
  },

  'th:first-child': {
     textAlign: 'left',
  },

  // background on even rows
  'tr:nth-child(even)': {
    backgroundColor: '#FAFAFA',
  },

  // shadows and background
  'td:nth-child(3)': {
    color: '#FFFFFF',
    background: 'linear-gradient(90deg, #673AB7 0%, #5865F2 100%)',
  },
  'tr:nth-child(even) td:nth-child(3)': {
    color: '#FFFFFF',
    background: 'linear-gradient(90deg, #673AB7FA 0%, #5865F2FA 100%)',
  },
  'th:nth-child(3)': {
    color: '#FFFFFF',
    background: 'linear-gradient(90deg, #673AB7 0%, #5865F2 100%)',
  },

  // Additional style for the first and last cells in the gradient column
  'tr:first-of-type th:nth-child(3)': {
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
  },

  'tr:last-of-type td:nth-child(3)': {
    borderBottomLeftRadius: '8px',
    borderBottomRightRadius: '8px',
  },

  // bold texts
  'tr:nth-child(2)': {
    fontWeight: 'bold',
  },
  'tr:nth-child(3)': {
    fontWeight: 'bold',
  },
  'td:first-child': {
    fontWeight: 'bold',
  },
});

export { PricingTableStyle, Switch, BillingToggle, ToggleRow, PriceLabel, SavingsBadge, HeaderContent, PricingInfo, ButtonContainer, PriceDisplay };