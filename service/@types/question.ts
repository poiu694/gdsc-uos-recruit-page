import { TeamKeyType } from '@gdsc-uos/ui';

export interface QuestionListItem {
  id?: string;
  type: TeamKeyType;
  title: string;
  url: string;
  desc?: string;
}
