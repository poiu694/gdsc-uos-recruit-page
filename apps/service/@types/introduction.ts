export interface AsideCardType {
  team: string;
  experience: string;
  needs: string[];
}

export interface ResponseIntroduction {
  about: string;
  activity: string;
  target: string;
}

export interface IntroductionType {
  title: string;
  desc: string;
  about: string[];
  activity: string[];
  target: string[];
  aside: AsideCardType;
}
