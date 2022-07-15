export const Team = {
  frontend: 'Frontend',
  backend: 'Backend',
  mobile: 'Mobile',
  data_ml: 'DA/ML',
} as const;


type TeamType = typeof Team;
export type TeamValueType = TeamType[keyof TeamType];