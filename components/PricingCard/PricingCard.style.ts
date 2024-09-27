import { styled } from 'styles';

const PricingTable = styled('table', {
  flex: '1',
  boxShadow: '$4',
  table: {
    borderCollapse: 'collapse',
    borderRadius: '$2',
    tableLayout: 'fixed',
    marginBottom: '$4',
    display: 'flex',

  },

  'td': {
     border: '1px solid #FAFAFA',
     width: '290px',
     height: '60px',
     textAlign: 'left',
     verticalAlign: 'middle',
     paddingLeft: '50px',
     paddingRight: '50px',
  },

  'th': {
     border: '1px solid #FAFAFA',
     width: '290px',
     height: '100px',
     textAlign: 'center',
     padding: '20px',
  },

  // background on even rows
  'tr:nth-child(even)': {
    backgroundColor: '#FAFAFA',
  },

  // shadows
  'td:nth-child(3)': {
    boxShadow: '0 0 24px 0px #0B2F6133',
    clipPath: 'inset(0px -15px 0px -15px)',
  },
  'th:nth-child(3)': {
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

const PricingIcon = styled('div', {
  padding: 12,
  display: 'inline-flex',
  borderRadius: 8,
  marginBottom: 24,
});

const PricingCardStyle = styled('div', {
  display: 'flex',
  flex: '1',
  boxShadow: '$4',
  borderRadius: '$2',
  padding: '$6',
  backgroundColor: '$white',
});

const PricingCardStyleShadow = styled('div', {
  display: 'flex',
  flex: '1',
  boxShadow: '$4',
  borderRadius: '$2',
  padding: '$6',
  backgroundColor: '$white',
});

const PricingCardList = styled('ul', {
  marginBottom: '$6',
  paddingLeft: '$5',
  fontSize: '$2',
  li: {
    color: '$secondary',
    '&:not(:last-child)': {
      marginBottom: '$3',
    },
    span: {
      color: '$black700',
    },
  },
});

export { PricingCardStyle, PricingCardList, PricingCardStyleShadow, PricingTable, PricingIcon};
