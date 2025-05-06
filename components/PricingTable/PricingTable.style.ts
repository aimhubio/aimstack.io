import { styled } from 'styles';

const PricingTableStyle = styled('table', {
  flex: '1',
  boxShadow: '$4',
  width: '1160px', // Set explicit width
  maxWidth: '100%', // For responsiveness
  margin: '0 auto', // Center the table

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
     height: '100px',
     textAlign: 'center',
     padding: '20px',
  },

  'th:first-child': {
     textAlign: 'left',
     paddingLeft: '50px',
     paddingRight: '50px',
  },

  // background on even rows
  'tr:nth-child(even)': {
    backgroundColor: '#FAFAFA',
  },

  // shadows and background
  'td:nth-child(3)': {
    color: '#FFFFFF',
    background: 'linear-gradient(90deg, #673AB7 0%, #5865F2 100%)',
    boxShadow: '0 0 24px 0px #0B2F6133',
    clipPath: 'inset(0px -15px 0px -15px)',
  },
  'tr:nth-child(even) td:nth-child(3)': {
    color: '#FFFFFF',
    background: 'linear-gradient(90deg, #673AB7FA 0%, #5865F2FA 100%)',
    boxShadow: '0 0 24px 0px #0B2F6133',
    clipPath: 'inset(0px -15px 0px -15px)',
  },
  'th:nth-child(3)': {
    color: '#FFFFFF',
    background: 'linear-gradient(90deg, #673AB7 0%, #5865F2 100%)',
    boxShadow: '0 0 24px 0px #0B2F6133',
    clipPath: 'inset(0px -15px 0px -15px)',
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
})

export { PricingTableStyle };
