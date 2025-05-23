import { styled } from 'styles';

export const ContactContainer = styled('div', {
  '.form-field': {
    marginBottom: '24px',
  },
  '.input-field': {
    width: '100%',
    padding: '12px',
    borderRadius: '4px',
    border: '1px solid $gray400',
    fontSize: '16px',
    transition: 'border-color 0.2s ease',

    '&:focus': {
      borderColor: '$primary',
      outline: 'none',
    }
  }
});