import { styled, keyframes } from 'styles';

const HeaderStyle = styled('header', {
  height: '72px',
  position: 'fixed',
  top: '0px',
  left: '0px',
  right: '0px',
  zIndex: 99,
  transition: '$main',

  '&.fixed': {
    boxShadow: '$3',
    backgroundColor: '$white'
  }
});
const HeaderContent = styled('div', {
  display: 'flex',
  alignItems: 'center',
  height: '100%'
});
const HeaderNav = styled('nav', {
  display: 'flex',
  justifyContent: 'center',

  '.nav-list': {
    display: 'flex',

    li: {
      '&:not(:last-child)': {
        marginRight: '$6',

        '@bp0': {
          marginRight: '$4'
        }
      },

      a: {
        backfaceVisibility: 'hidden',
        display: 'inline-flex',

        '.text': {
          transition: '$main',
        },
        '.badge': {
          // position: 'absolute',
          display: 'inline-block',
          height: '18px',
          lineHeight: '18px',
          padding: '0 4px',
          borderRadius: '2px',
          backgroundColor: '$primary',
          color: '$white',
          fontWeight: '700',
          fontSize: '10px',
          marginLeft: '6px'
        },
        '&:hover': {
          '.text': {
            opacity: '.6'
          },
        }
      }
    }
  },

  '@bp1': {
    position: 'fixed',
    top: '72px',
    right: '0',
    bottom: '0',
    left: '0',
    overflowY: 'auto',
    zIndex: 10,
    height: '0',
    transition: 'height 0.5s',
    backgroundColor: '$white',
    flexDirection: 'column',
    justifyContent: 'space-between',

    '.open &': {
      height: 'calc(100% - 72px)'
    },
    '.nav-inner': {
      width: '100%',
      flexDirection: 'column',
      alignItems: 'inherit',
      justifyContent: 'space-between',
      paddingTop: '16px'
    },
    '.nav-list': {
      flexDirection: 'column',
      alignItems: 'flex-start',

      '> li': {
        fontSize: '$2',
        fontWeight: '$3',
        width: '100%',

        a: {
          display: 'block',
          padding: '$3 $5',

          '&:active': {
            backgroundColor: '$primaryLight'
          }
        },

        '&:not(:last-child)': {
          marginRight: '0'
        }
      }
    }
  }
});
const Logo = styled('div', {
  marginRight: '50px',
  '& .logo': {
    maxWidth: '158px',
    width: '100%',
    display: 'block'
  },

  '@bp1': {
    position: 'relative',
    zIndex: 11
  }
});

const HeaderButton = styled('div', {
  marginLeft: 'auto',

  span: {
    span: {
      display: 'flex',
      alignItems: 'center'
    }
  },
  '&.desktop-btn': {
    span: {
      span: {
        justifyContent: 'flex-end'
      }
    }
  }
});

const ButtonMenu = styled('button', {
  display: 'none',

  '@bp1': {
    position: 'relative',
    zIndex: 11,
    display: 'inline-block',
    appearance: 'none',
    border: 'none',
    backgroundColor: 'transparent',
    lineHeight: 1,
    cursor: 'pointer'
  }
});

const MobileSocial = styled('ul', {
  display: 'none',

  '@bp1': {
    display: 'flex',
    justifyContent: 'center',
    py: '$6',

    '> li': {
      marginRight: '$6'
    }
  }
});

export {
  HeaderStyle,
  HeaderContent,
  Logo,
  HeaderNav,
  HeaderButton,
  ButtonMenu,
  MobileSocial
};
