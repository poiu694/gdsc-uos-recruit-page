const Team = {
  common: 'common',
  frontend: 'frontend',
  backend: 'backend',
  mobile: 'mobile',
  data_ml: 'data_ml',
  design: 'design',
  all: 'all',
} as const;

type TeamType = typeof Team;
export type TeamKeyType = keyof TeamType;
export type TeamValueType = TeamType[keyof TeamType];
export type TeamContent<T> = { [k in TeamKeyType]: T };
