import { TeamKeyType } from './team';

export interface TitleOneDesc {
  title: string;
  desc: string;
}

export interface TitleTwoDesc {
  title: string;
  desc1: string;
  desc2: string;
}

export type TeamContent<T> = {[k in TeamKeyType]: T};