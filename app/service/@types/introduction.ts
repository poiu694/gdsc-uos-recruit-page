export interface AsideCardType {
  team: string;
  experience: string;
  needs: string[];
}

export interface IntroductionType {
  title: string;
  desc: string;
  introduction: string[];
  activities: string[];
  wants: string[];
  aside: AsideCardType;
}
