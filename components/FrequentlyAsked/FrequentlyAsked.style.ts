import {styled} from "../../styles";

const FAQ = styled('section', {
  maxWidth: '700px',
  margin: '2rem auto',
  fontFamily: 'sans-serif',
  padding: '2rem',
  borderRadius: '10px',

  '.details': {
    borderRadius: '5px',
    backgroundColor: '#FAFAFA',
    border: '1px solid #F6F6F6',
    padding: '24px 32px',  // Vertical padding only
    marginBottom: '0.25rem',  // Even smaller gap
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },

  '.summary': {
    fontWeight: 'bold',
    fontSize: '18px',
    listStyle: 'none',
    outline: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },

  '.summary-text': {
    flex: '1',
  },

  '.summary-icon': {
    marginLeft: '10px',
  },

  '.p': {
    marginTop: '0.75rem',
    paddingBottom: '0.5rem',
  },
});

export {FAQ}