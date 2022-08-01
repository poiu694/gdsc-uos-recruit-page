import { TeamValueType } from '../@types/Team';
import { theme } from '../theme';

export const getTitleCaseTeam = (type: TeamValueType) => {
  switch (type) {
    case 'frontend':
    case 'backend':
    case 'mobile':
      return `${type[0].toUpperCase()}${type.slice(1)}`
    case 'data_ml':
      return 'Data/ML';
    default: 
      return `Error case`
  }
}

export const getJobByTeam = (type: TeamValueType) => {
  switch (type) {
    case 'frontend':
    case 'backend':
    case 'mobile':
      return [`${getTitleCaseTeam(type)}`, 'Developer'];
    case 'data_ml':
      return ['Data', 'Engineer'];
    default:
      return [`${getTitleCaseTeam(type)}`, 'Developer'];
  }
};

export const get200Color = (type: TeamValueType) => {
  switch (type) {
    case 'frontend':
      return theme.palette.yellow200;
    case 'backend':
      return theme.palette.red200;
    case 'mobile':
      return theme.palette.green200;
    case 'data_ml':
      return theme.palette.blue200;
    default:
      return theme.palette.yellow200;
  }
};

export const get400Color = (type: TeamValueType) => {
  switch (type) {
    case 'frontend':
      return theme.palette.yellow400;
    case 'backend':
      return theme.palette.red400;
    case 'mobile':
      return theme.palette.green400;
    case 'data_ml':
      return theme.palette.blue400;
    default:
      return theme.palette.yellow400;
  }
};