import { styled } from 'styles';

const PricingCardStyle = styled('div', {
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
  listStyleType: 'disc',
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

export { PricingCardStyle, PricingCardList };
