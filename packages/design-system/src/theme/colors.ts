import { TeamContent } from '../@types/Team';

export const palette = {
  // Gray Scale
  background: '#FCFCFC',
  white: '#F8FAF9',
  gray50: '#F9FAFB',
  gray100: '#F2F4F6',
  gray150: '#E5E8EB',
  gray200: '#D1D6DB',
  gray250: '#B0B8C1',
  gray300: '#8B95A1',
  gray350: '#6B7684',
  gray400: '#4E5968',
  gray450: '#333D4B',
  gray500: '#292929',
  gray550: '#202020',
  black: '#181818',

  // core color
  coreBlue: '#4285F4',
  coreRed: '#EA4335',
  coreYellow: '#FBBC04',
  coreGreen: '#0F9D58',

  // red color
  red100: '#FFEBEE',
  red200: '#FFCDD2',
  red300: '#EF9A9A',
  red400: '#E57373',
  red500: '#EF5350',
  red600: '#F44336',

  // gren color
  green100: '#E8F5E9',
  green200: '#C8E6C9',
  green300: '#A5D6A7',
  green400: '#81C784',
  green500: '#66BB6A',
  green600: '#4CAF50',

  // yellow color
  yellow100: '#FFF8E1',
  yellow200: '#FFECB3',
  yellow300: '#FFE082',
  yellow400: '#FFD54F',
  yellow500: '#FFCA28',
  yellow600: '#FFC107',

  // blue color
  blue100: '#E3F2FD',
  blue200: '#BBDEFB',
  blue300: '#90CAF9',
  blue400: '#64B5F6',
  blue500: '#42A5F5',
  blue600: '#2196F3',

  // orange for default
  orange: '#F36B08',
  orange200: '#F6BF97',
  orange400: '#F38B08',
  orange600: '#F37D28',
} as const;

export const colors = {
  primary: {
    red: palette.coreRed,
    yellow: palette.coreYellow,
    green: palette.coreGreen,
    blue: palette.coreBlue,
    black: palette.black,
    white: palette.white,
  },
  background: palette.background,
  text: {
    general: palette.gray450,
    bold: palette.black,
  },
  ui: {
    divider: palette.gray300,
    border: palette.gray200,
    hover: palette.gray150,
  },
  team: {
    frontend: palette.coreYellow,
    backend: palette.coreRed,
    mobile: palette.coreGreen,
    data_ml: palette.coreBlue,
    design: palette.orange,
    core: palette.orange, // default
    common: palette.orange,
  } as TeamContent<PalleteValueType>,
} as const;

export const darkTheme = {
  primary: {
    red: palette.red400,
    yellow: palette.yellow400,
    green: palette.green400,
    blue: palette.blue400,
    black: palette.black,
    white: palette.gray100,
  },
  background: palette.gray500,
  text: {
    general: palette.gray200,
    bold: palette.gray100,
  },
  ui: {
    divider: palette.gray150,
    border: palette.gray150,
    hover: palette.gray550,
  },
  team: {
    frontend: palette.yellow400,
    backend: palette.red400,
    mobile: palette.green400,
    data_ml: palette.blue400,
    design: palette.orange400,
    core: palette.orange400, // default
    common: palette.orange400,
  } as TeamContent<PalleteValueType>,
} as const;

type PalleteType = typeof palette;
export type PalleteValueType = PalleteType[keyof PalleteType];
