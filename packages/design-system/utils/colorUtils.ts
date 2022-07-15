import { TeamValueType } from '../@types/Team';
import { theme } from '../theme';

export const getJobByTeam = (type: TeamValueType) => {
  switch (type) {
    case 'Frontend':
    case 'Backend':
    case 'Mobile':
      return `${type} Developer`;
    case 'DA/ML':
      return `Data Engineer`;
    default:
      return `${type} Developer`;
  }
};

export const getPrimaryColor = (type: TeamValueType) => {
  switch (type) {
    case 'Frontend':
      return theme.colors.primary.yellow;
    case 'Backend':
      return theme.colors.primary.red;
    case 'Mobile':
      return theme.colors.primary.green;
    case 'DA/ML':
      return theme.colors.primary.blue;
    default:
      return theme.colors.primary.yellow;
  }
};
