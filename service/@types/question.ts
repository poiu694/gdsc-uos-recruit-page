import { TeamKeyType } from 'gdsc-uos-design-system/@types/Team';

export interface QuestionListItem {
  id?: string;
  type: TeamKeyType;
  title: string;
  url: string;
  desc?: string;
}
