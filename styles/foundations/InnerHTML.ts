import { styled } from 'styles';

export const InnerHTML = styled('div', {
  margin: '$10 auto',
  lineHeight: '1.7',

  'h1, h2, h3, h4, h5, h6': {
    marginTop: '$8',
    marginBottom: '$5',
  },

  h2: {
    fontSize: '$7',
    fontWeight: '$3',
    '@bp2': {
      fontSize: '$6',
    },
  },

  h3: {
    fontSize: '$6',
    fontWeight: '$3',
    '@bp2': {
      fontSize: '$4',
    },
  },

  p: {
    marginBottom: '$5',
    fontSize: '$4',
    fontFamily: '$Lora',
    color: '$black800'
  },

  ul: {
    marginBottom: '$5',
    paddingLeft: '$10',
    listStyleType: 'disc',
    fontSize: '$3',
    fontFamily: '$Lora',
    li: {
      '&:not(:last-child)': {
        marginBottom: '$2',
      },
    },
  },

  a: {
    textDecoration: 'underline',
    wordBreak: 'break-all',
    fontFamily: '$Lora',

    '&:hover': {
      color: '$primary',
    },
  },

  img: {
    width: '100%',
    height: 'auto',
  },
  strong: {
    fontWeight: '$4',
  },

  blockquote: {
    paddingLeft: '$9',
    borderLeft: '2px solid $grey',
    fontSize: '$2',
    fontStyle: 'italic',
  },

  'em, q': {
    fontStyle: 'italic',
  },

  pre: {
    fontSize: '$2',
    fontFamily: '$Inconsolata',
    lineHeight: 1.7,
    overflow: 'auto',
    whiteSpace: 'pre',
    wordBreak: 'normal',
    margin: '0 0 $5',
    padding: '$10',
    color: '$darkGreyHover',
    backgroundColor: '$lightGrey',
    border: 'none',
    borderRadius: '2px',
  },
  code: {
    whiteSpace: 'pre-wrap',
  },
});

export default InnerHTML;
