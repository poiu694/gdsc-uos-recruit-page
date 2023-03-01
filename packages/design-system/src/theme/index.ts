import { colors, darkTheme, palette } from './colors';
import { fonts } from './fonts';
import { padding, size } from './sizes';
import { zIndex } from './zIndex';

type Colors = typeof colors | typeof darkTheme;
export const theme = {
  palette,
  colors: colors as Colors,
  fonts,
  size,
  padding,
  zIndex,
} as const;

export type Theme = typeof theme;
export * from './colors';
export * from './fonts';
export * from './sizes';
export * from './zIndex';
export * from './globalStyle';
