import { TeamKeyType } from 'gdsc-uos-design-system';

export type ApplyState = '최종 합격' | '최종 불합격' | '서류 합격' | '서류 불합격' | '서류 제출';

export interface UserApplication {
  id: number;
  name: string;
  email: string;
  team: TeamKeyType;
  status: ApplyState;
  season: string;
  isApplyCore: boolean;
  isFinishEvaluation: boolean;
  applicationId: number;
  interviewId: number;
}

export interface FAQ {
  title: string;
  description: string;
}