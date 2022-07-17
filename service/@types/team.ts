const Team = {
  common: 'common',
  frontend: 'frontend',
  backend: 'backend',
  mobile: 'mobile',
  data_ml: 'data_ml',
} as const;

export type TeamValueType = typeof Team;
export type TeamKeyType = keyof TeamValueType;