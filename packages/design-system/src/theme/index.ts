import { colors, palette } from './colors';
import { fonts } from './fonts';
import { padding, size } from './sizes';
import { zIndex } from './zIndex';

export const theme = {
  palette,
  colors,
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