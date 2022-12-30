import { createStitches } from '@stitches/react';
import theme from './theme';
import utils from './utils';
import global from './global';
import media from './media';

export const { styled, getCssText, globalCss, keyframes } = createStitches({
  theme: theme,
  utils: utils,
  media: media,
});

const globalStyles = globalCss(global);
globalStyles();
