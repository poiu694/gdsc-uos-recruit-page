import { TeamKeyType } from 'gdsc-uos-design-system';

export interface TitleWithDescription {
  title: string;
  desc: string;
}

export interface TeamNameProps {
  teamName: TeamKeyType;
}

export interface ApplyQuestion {
  title: string;
  required: boolean;
  maxLength: number;
}