import { styled, keyframes } from 'styles';

const copyAnimation = keyframes({
  '0%': { opacity: '0' },
  '10%': { opacity: '1' },
  '90%': { opacity: '1' },
  '100%': { opacity: '0' },
});

const QuickStartStyle = styled('section', {
  position: 'relative',

  '.float-text': {
    float: 'left',
    width: '45%',

    '@bp1': {
      width: '100%',
    },
  },
});
const QuickStartInner = styled('div', {
  overflow: 'hidden',
});

const Left = styled('div', {
  width: '47%',
  paddingTop: '80px',
  paddingBottom: '$9',
  float: 'left',

  '@bp1': {
    width: '100%',
    float: 'none',
    textAlign: 'center',
  },
});

const Right = styled('div', {
  float: 'right',
  marginLeft: '80px',

  '@bp1': {
    float: 'none',
    marginLeft: '0',
  },
});

const CodeBlockStyle = styled('div', {
  paddingTop: '$5',
});

const HighlightWrapper = styled('div', {
  position: 'relative',

  button: {
    position: 'absolute',
    right: '0',
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
  ".hljs": {
    display: "block",
    overflowX: "auto",
    color: "#abb2bf",
    background: "#282c34",
    marginBottom: '20px',
    borderRadius: '$1',
    padding: '$4',
  },
  ".hljs-comment,.hljs-quote": { color: "#5c6370", fontStyle: "italic" },
  ".hljs-doctag,.hljs-keyword,.hljs-formula": { color: "#c678dd" },
  ".hljs-section,.hljs-name,.hljs-selector-tag,.hljs-deletion,.hljs-subst": {
    color: "#e06c75"
  },
  ".hljs-literal": { color: "#56b6c2" },
  ".hljs-string,.hljs-regexp,.hljs-addition,.hljs-attribute,.hljs-meta-string": {
    color: "#98c379"
  },
  ".hljs-built_in,.hljs-class .hljs-title": { color: "#e6c07b" },
  ".hljs-attr,.hljs-variable,.hljs-template-variable,.hljs-type,.hljs-selector-class,.hljs-selector-attr,.hljs-selector-pseudo,.hljs-number": {
    color: "#d19a66"
  },
  ".hljs-symbol,.hljs-bullet,.hljs-link,.hljs-meta,.hljs-selector-id,.hljs-title": {
    color: "#61aeee"
  },
  ".hljs-emphasis": { fontStyle: "italic" },
  ".hljs-strong": { fontWeight: "bold" },
  ".hljs-link": { textDecoration: "underline" }

  //end highlighter plugin code
});

export {
  QuickStartStyle,
  QuickStartInner,
  Left,
  Right,
  HighlightWrapper,
  CodeBlockStyle,
};
