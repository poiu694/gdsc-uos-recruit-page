export const Team = {
  frontend: 'frontend',
  backend: 'backend',
  mobile: 'mobile',
  data_ml: 'data_ml',
} as const;


type TeamType = typeof Team;
export type TeamValueType = TeamType[keyof TeamType];