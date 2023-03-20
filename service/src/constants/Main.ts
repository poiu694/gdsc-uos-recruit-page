const MainBannerDesc = '2023년부터 함께 할 사람을 찾습니다.';

const MainProcess = {
  content: {
    title: 'Process for Recruit',
    desc: '저희와 함께 할 새로운 멤버를 구합니다.\n많은 지원 부탁드립니다.',
  },
  circle: [
    {
      title: '서류 접수',
      desc: '2023.03.20 ~ 2023.03.24',
    },
    {
      title: '서류 발표',
      desc: '2023.03.26',
    },
    {
      title: '인터뷰 진행',
      desc: '2023.03.27 ~ 2023.03.31',
    },
    {
      title: '최종 발표',
      desc: '2023.04.03',
    },
  ],
};

const MainTeam = {
  title: 'Show us your passion !',
  desc: '성장을 원하고 열정적인 사람을 찾습니다.\n당신의 열정을 뽐내주세요.',
};

export default {
  banner: MainBannerDesc,
  process: MainProcess,
  team: MainTeam,
} as const;
