import { styled } from 'styles';

export const InnerHTML = styled('div', {
  margin: '$10 auto',
  lineHeight: '1.7',

  'h1, h2, h3, h4, h5, h6': {
    marginTop: '$8',
    marginBottom: '$5',
  },

  h1: {
    fontSize: '$8',
    fontWeight: '$3',
    borderBottom: '1px solid $grey',
    '@bp2': {
      fontSize: '$7',
    },
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

  'ol, ul': {
    marginBottom: '$5',
    paddingLeft: '$10',
    fontSize: '$3',
    fontFamily: '$Lora',


    li: {
      '>ul': {
        listStyleType: 'circle',
      },
      '&:not(:last-child)': {
        marginBottom: '$2',
      },
    },
  },
  ul: {
    listStyleType: 'disc',

    ':has(input)': {
      listStyleType: 'none',
    }
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
    maxWidth: '100%',
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

  table: {
    marginBottom: '$4'
  },
  'table, th, td': {
    border: '1px solid $grey',
  },
  'th, td': {
    padding: '6px 13px'
  },
  iframe: {
    maxWidth: '100%'
  }
});

export default InnerHTML;
