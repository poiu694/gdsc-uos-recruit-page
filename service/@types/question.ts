import { TeamKeyType } from './team';

export interface QuestionListItem {
  id?: string;
  type: TeamKeyType;
  title: string;
  url: string;
  desc?: string;
}
