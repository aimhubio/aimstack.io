import { ConfigType } from '@stitches/react/types/config';
import Theme = ConfigType.Theme;

const theme: Theme = {
  fonts: {
    OpenSans: "'Open Sans', sans-serif",
    Lora: "'Lora', serif",
    Inconsolata: "'Inconsolata', monospace",
    base: '$OpenSans',
  },
  colors: {
    blue: '#1093F2',
    lightBlue: 'rgba(16, 147, 242, 0.1)',
    darkBlue: '#0C1031', //#11133A
    darkBlue500: 'rgba(12,16,49,0.5)',
    bigStone: '#191D3C',
    bigStoneHover: '#313551',
    green: '#14C89D',
    black: '#000000',
    black700: 'rgba(0,0,0,0.7)',
    white: '#ffffff',
    white100: 'rgba(255,255,255,0.1)',
    white500: 'rgba(255,255,255,0.5)',
    white700: 'rgba(255,255,255,0.7)',
    red: '#CC231A',
    lightGrey: '#F4F7F9',
    grey: '#CFD3D6',
    darkGrey: '#737379',
    darkGreyHover: '#393940',

    primary: '$blue',
    primaryLight: '$lightBlue',
    secondary: '$green',
    textColor: '$black',
    bgColor: '$darkBlue',
    danger: '$red',
  },
  fontSizes: {
    1: '14px',
    2: '16px',
    3: '18px',
    4: '20px',
    5: '22px',
    6: '24px',
    7: '32px',
    8: '44px',
    9: '64px',
    10: '68px',

    baseSize: '$2',
  },
  space: {
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '20px',
    6: '24px',
    7: '28px',
    8: '32px',
    9: '36px',
    10: '40px',
    11: '44px',
    12: '48px',
  },
  fontWeights: {
    1: '400',
    2: '500',
    3: '600',
    4: '700',
    5: '800',
  },
  shadows: {
    1: '0px 60px 66px -65px rgba(11, 47, 97, 0.2)',
    2: '0px 96px 66px -65px rgba(11, 47, 97, 0.2)',
    3: '1px 1px 10px 3px  rgb(0, 0, 0, 10%)',
    4: '0px 10px 24px -10px rgba(11, 47, 97, 0.4)',
  },
  radii: {
    1: '6px',
    2: '8px',
  },
  transitions: {
    main: '0.2s ease-out',
  },
};

export default theme;
