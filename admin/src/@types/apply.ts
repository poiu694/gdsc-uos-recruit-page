import { TeamKeyType } from 'gdsc-uos-design-system';

export type ApplyState = '최종 합격' | '최종 불합격' | '서류 합격' | '서류 불합격' | '서류 제출';

export type HistoryType = 'application' | 'interview';

export interface UserApplication {
  id: number;
  name: string;
  email: string;
  team: TeamKeyType;
  state: ApplyState;
  isApplyCore: boolean;
  isFinishEvaluation: boolean;
  applicationList: {
    id: number;
    title: string;
  }[];
  interviewList: {
    id: number;
    title: string;
  }[];
}