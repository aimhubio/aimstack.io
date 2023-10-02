import { styled, keyframes } from 'styles';

const copyAnimation = keyframes({
  '0%': { opacity: '0' },
  '10%': { opacity: '1' },
  '90%': { opacity: '1' },
  '100%': { opacity: '0' },
});

const QuickStartSection = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  position: 'relative',
  paddingBottom: '100px',
  '@bp2': {
    padding: '80px 0 24px',
  },
});

const QuickStartSectionInner = styled('div', {
  backgroundColor: '#04062E',
  padding: '100px 0',
  '.quickstart-button': {
    marginTop: '$14',
    fontWeight: '$3',
    '@bp1': {
      display: 'none',
    }
  },
  '.quickstart-button-mobile': {
    display: 'none',
    textAlign: 'center',
    marginTop: '$6',
    '@bp1': {
      display: 'inline-block',
      marginInline: 'auto'
    }
  }
});

const QuickStartInner = styled('div', {
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'space-between',
  '@bp1': {
    flexDirection: 'column',
    margin: '0 auto',
  },
});

const Left = styled('div', {
  maxWidth: '480px',
  '@bp1': {
    marginBottom: '$14',
  },
  '.quickstart-title': {
    color: '$white',
    marginBottom: '$6',
  },
  '.quickstart-subtitle': {
    color: '$white',
    '& li': {
      marginBottom: '$3',
      position: 'relative',
      paddingLeft: '24px',
      lineHeight: '26px',
      '&:before': {
        content: '•',
        position: 'absolute',
        left: '0',
        top: '-5px',
        fontSize: '24px',
        color: '#1093F2',
      },
    },
  },
});

const Right = styled('div', {
  marginLeft: '80px',
  '@bp1': {
    marginLeft: '0',
  },
});

const CodeBlockStyle = styled('div', {
  paddingTop: '$5',
  code: {
    fontFamily: '$Inconsolata',
  },
});

const HighlightWrapper = styled('div', {
  position: 'relative',
  width: '500px',

  '@bp0': {
    width: 'unset',
  },

  '&.light': {
    '.hljs': {
      backgroundColor: '$white',
      color: '$textColor',
    },
  },

  button: {
    position: 'absolute',
    right: '12px',
    top: '6px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    height: '42px',
    width: '42px',
    transition: '$main',
    '&:hover': {
      opacity: '.6',
    },
  },

  '.copied': {
    display: 'block',
    opacity: '0',
    position: 'absolute',
    right: '0',
    top: '-20px',
    animation: `${copyAnimation} 2.5s ease 0s alternate`,
    color: '$secondary',
    fontSize: '$1',
    fontWeight: '$2',
    transition: '$main',
    zIndex: 10,
  },

  //highlighter plugin code
  '.hljs': {
    display: 'block',
    overflowX: 'auto',
    color: '#abb2bf',
    background: '#282c34',
    marginBottom: '20px',
    borderRadius: '$1',
    padding: '$4',
  },
  '.hljs-comment,.hljs-quote': { color: '#5c6370', fontStyle: 'italic' },
  '.hljs-doctag,.hljs-keyword,.hljs-formula': { color: '#c678dd' },
  '.hljs-section,.hljs-name,.hljs-selector-tag,.hljs-deletion,.hljs-subst': {
    color: '#e06c75',
  },
  '.hljs-literal': { color: '#56b6c2' },
  '.hljs-string,.hljs-regexp,.hljs-addition,.hljs-attribute,.hljs-meta-string':
    {
      color: '#98c379',
    },
  '.hljs-built_in,.hljs-class .hljs-title': { color: '#e6c07b' },
  '.hljs-attr,.hljs-variable,.hljs-template-variable,.hljs-type,.hljs-selector-class,.hljs-selector-attr,.hljs-selector-pseudo,.hljs-number':
    {
      color: '#d19a66',
    },
  '.hljs-symbol,.hljs-bullet,.hljs-link,.hljs-meta,.hljs-selector-id,.hljs-title':
    {
      color: '#61aeee',
    },
  '.hljs-emphasis': { fontStyle: 'italic' },
  '.hljs-strong': { fontWeight: 'bold' },
  '.hljs-link': { textDecoration: 'underline' },

  //end highlighter plugin code
});

export {
  QuickStartSection,
  QuickStartSectionInner,
  QuickStartInner,
  Left,
  Right,
  HighlightWrapper,
  CodeBlockStyle,
};
