import { TeamContent } from '../@types/Team';

export const palette = {
  // Gray Scale
  background: '#FCFCFC',
  white: '#F8FAF9',
  gray50: '#EEEEEE',
  gray100: '#AFAFAF',
  gray200: '#898989',
  gray300: '#676767',
  gray400: '#353535',
  gray500: '#292929',
  black: '#181818',

  // core color
  coreBlue: '#4285F4',
  coreRed: '#EA4335',
  coreYellow: '#FBBC04',
  coreGreen: '#34A853',

  // red color
  red100: '#FFEBEE',
  red200: '#FFCDD2',
  red300: '#EF5350',
  red400: '#F44336',

  // gren color
  green100: '#E8F5E9',
  green200: '#C8E6C9',
  green300: '#66BB6A',
  green400: '#4CAF50',

  // yellow color
  yellow100: '#FFF8E1',
  yellow200: '#FFECB3',
  yellow300: '#FFCA28',
  yellow400: '#FFC107',

  // blue color
  blue100: '#E3F2FD',
  blue200: '#BBDEFB',
  blue300: '#42A5F5',
  blue400: '#2196F3',

  // orange for default
  orange: '#F36B08',
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
    general: palette.gray400,
    bold: palette.black,
  },
  ui: {
    divider: palette.gray100,
    border: palette.gray100,
    hover: palette.gray50,
    // overlay: `linear-gradient(180deg, rgba(79, 23, 197, 0) -39.47%, ${palette.purple400} 100%)`,
  },
  team: {
    frontend: palette.coreYellow,
    backend: palette.coreRed,
    mobile: palette.coreGreen,
    data_ml: palette.coreBlue,
    all: palette.orange, // default 
    common: palette.orange // default 
  } as TeamContent<PalleteValueType>
} as const;


type PalleteType = typeof palette;
export type PalleteValueType = PalleteType[keyof PalleteType];