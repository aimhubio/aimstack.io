import { styled, keyframes } from 'styles';

const fixedHeader = keyframes({
  '0%': { top: '-72px' },
  '100%': { top: '0' },
});

const HeaderStyle = styled('header', {
  height: '72px',

  '&.fixed': {
    backgroundColor: '$white',
    position: 'fixed',
    top: '0px',
    left: '0px',
    right: '0px',
    zIndex: 99,
    boxShadow: '$3',

    '&.animated': {
      top: '-72px',
      animation: `${fixedHeader} 0.3s ease forwards`,
    }
  },
});
const HeaderContent = styled('div', {
  display: 'flex',
  alignItems: 'center',
  height: '100%',
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
          marginRight: '$4',
        },
      },

      a: {
        '&:hover': {
          opacity: '.8',
        },
      },
    },
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
      height: 'calc(100% - 72px)',
    },
    '.nav-inner': {
      width: '100%',
      flexDirection: 'column',
      alignItems: 'inherit',
      justifyContent: 'space-between',
      padding: '16px 20px 0',
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
          py: '$3'
        },

        '&:not(:last-child)': {
          marginRight: '0',
        },
      },
    },
  },
});
const Logo = styled('div', {
  marginRight: '50px',
  '& .logo': {
    maxWidth: '158px',
    width: '100%',
    display: 'block',
  },

  '@bp1': {
    position: 'relative',
    zIndex: 11,
  },
});

const HeaderButton = styled('div', {
  marginLeft: 'auto',

  span: {
    span: {
      display: 'flex',
      alignItems: 'center',
    },
  },
  '&.desktop-btn': {
    span: {
      span: {
        justifyContent: 'flex-end',
      },
    },
  },
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
    cursor: 'pointer',
  },
});

const MobileSocial = styled('ul', {
  display: 'none',

  '@bp1': {
    display: 'flex',
    justifyContent: 'center',
    py: '$6',

    '> li': {
      marginRight: '$6',
    },
  },
});

export {
  HeaderStyle,
  HeaderContent,
  Logo,
  HeaderNav,
  HeaderButton,
  ButtonMenu,
  MobileSocial,
};
