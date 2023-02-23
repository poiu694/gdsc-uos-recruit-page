import { TeamKeyType } from 'gdsc-uos-design-system';

export interface TitleWithDescription {
  title: string;
  desc: string;
}

export interface TeamNameProps {
  teamName: TeamKeyType;
}

export interface ApplyQuestion {
  id: string;
  title: string;
  required: boolean;
  maxLength: number;
}