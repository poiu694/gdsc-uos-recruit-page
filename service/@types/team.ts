const Team = {
  common: 'common',
  frontend: 'frontend',
  backend: 'backend',
  mobile: 'mobile',
  data_ml: 'data_ml',
  all: 'all'
} as const;

export type TeamValueType = typeof Team;
export type TeamKeyType = keyof TeamValueType;