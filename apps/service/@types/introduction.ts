export interface AsideCardType {
  team: string;
  experience: string;
  needs: string[];
}

export interface ResponseIntroduction {
  introduction: string;
  activity: string;
  target: string;
}

export interface IntroductionType {
  title: string;
  desc: string;
  introduction: string[];
  activity: string[];
  target: string[];
  aside: AsideCardType;
}
