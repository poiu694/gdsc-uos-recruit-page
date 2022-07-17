import { TeamKeyType } from './team';

export interface QuestionListItem {
  type: TeamKeyType;
  title: string;
  url: string;
  desc?: string;
}
