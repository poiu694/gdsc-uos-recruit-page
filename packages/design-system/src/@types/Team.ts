export const BASIC_TEAM = {
  frontend: 'frontend',
  backend: 'backend',
  mobile: 'mobile',
  data_ml: 'data_ml',
  design: 'design',
} as const ;

export const TEAM_LIST = {
  ...BASIC_TEAM,
  common: 'common',
} as const;

type TeamType = typeof TEAM_LIST;
export type TeamKeyType = keyof TeamType;
export type TeamValueType = TeamType[keyof TeamType];
export type TeamContent<T> = { [k in TeamKeyType]: T };
