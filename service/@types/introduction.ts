export interface AsideCard {
  team: string;
  experience: string;
  needs: string[];
}

export interface IntroductionType {
  title: string;
  desc: string;
  introduction: string;
  activities: string[];
  aside: AsideCard;
}