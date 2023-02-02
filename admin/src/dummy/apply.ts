import { ApplyState } from '../@types';

const dummyApply = {
  id: '',
  name: '홍길동',
  team: 'frontend',
  email: '',
  state: '1차 합격' as ApplyState,
  isApplyCore: true,
  isFinishEvaluation: true,
  applicationId: 1,
  interviewId: 1,
};

export const DUMMY_APPLYS = Array.from({ length: 50 }).map((_, idx) => ({
  ...dummyApply,
  id: idx + 1,
  name: `홍길동${idx + 1}`,
  team:
    idx % 5 === 0
      ? ('FRONTEND' as any)
      : idx % 4 === 0
      ? ('BACKEND' as any)
      : idx % 3 === 0
      ? ('DATA_ML' as any)
      : idx % 2 === 0
      ? ('DESIGN' as any)
      : ('MOBILE' as any),
  email: `honggildong${idx}@naver.com`,
  state:
    idx % 5 === 0
      ? ('서류 합격' as ApplyState)
      : idx % 4 === 0
      ? ('서류 불합격' as ApplyState)
      : idx % 3 === 0
      ? ('최종 합격' as ApplyState)
      : idx % 2 === 0
      ? ('최종 불합격' as ApplyState)
      : ('서류 제출' as ApplyState),
  isApplyCore: idx % 2 === 0 ? true : false,
  isFinishEvaluation: idx % 2 !== 0 ? true : false,
}));


export const DUMMY_APPLICATION = {
  name: '홍길동',
  team: 'FRONTEND',
  questions: [
    {
      title: '자기소개 부탁드립니다.',
      answer: '동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세. 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세.동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세. 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세.동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세. 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세.동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세. 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세.동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세. 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세.'
    },
    {
      title: '극복해낸 역경 어쩌구 부탁드립니다.',
      answer: '동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세. 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세.동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세. 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세.동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세. 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세.동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세. 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세.동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세. 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세.'
    },
    {
      title: '협업 어쩌구 부탁드립니다.',
      answer: '동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세. 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세.동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세. 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세.동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세. 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세.동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세. 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세.동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세. 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세.'
    },
    {
      title: '지원한 분야를 위해 노력한 어쩌구 부탁드립니다.',
      answer: '동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세. 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세.동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세. 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세.동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세. 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세.동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세. 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세.동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세. 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세.'
    },
  ],
  memos: [
    {
      name: '관리인1',
      label: '아직 관련 경험이 없지만, 열정이 넘쳐보여서 좋음'
    },
    {
      name: '관리인2',
      label: '같이 하고 싶은 사람'
    }
  ],
  state: '서류 합격' as ApplyState,
  evaluations: [
    {name: '관리인1', state: '서류 합격'},
    {name: '관리인2', state: '서류 불합격'},
    {name: '관리인3', state: '최종 불합격'},
    {name: '관리인4', state: '최종 합격'},
  ]
}

export const QUESTIONS = [
  {
    title:
      '서울시립대 학생으로서, 졸업까지 남은 학기가 2학기 이상(휴학예정인 학기 포함) 즉 앞으로 1년간 학부생 신분으로 활동하실 수 있는 상태인가요?',
    maxLength: 500,
    required: true,
  },
  {
    title: '성함',
    maxLength: 100,
    required: true,
  },
  {
    title: '학번',
    maxLength: 100,
    required: true,
  },
  {
    title: '학년',
    maxLength: 100,
    required: true,
  },
  {
    title: '학과',
    maxLength: 100,
    required: true,
  },
  {
    title: '지원하시게 된 이유와 GDSC에서 무엇을 하고 싶은지를 알려주세요!',
    maxLength: 500,
    required: true,
  },
  {
    title:
      '분야에 상관 없이 난관을 이겨내고 성공해보신 경험을 들려주세요! (개발 관련 경험이면 더 좋아요!)',
    maxLength: 500,
    required: true,
  },
  {
    title:
      '관심 있는 개발 분야와 해당 능력을 향상하기 위해 노력해보셨던 경험을 들려주세요!',
    maxLength: 500,
    required: true,
  },
  {
    title:
      '개발 관련하여 자신 있는 분야, 대외활동, 인턴, 특별한 경험 등 앞에서는 미처 다 적지 못했던 자신의 자랑거리를 모두 적어주세요! 자세하게 적을 필요 없이 간단하게 적어주시면 돼요 🙂 ( 예시 : 개발 외주, 42 Seoul, 인턴 3개월 )',
    maxLength: 500,
    required: true,
  },
  {
    title: '사용하시는 깃헙(GitHub) 아이디를 적어주세요.',
    maxLength: 100,
    required: false,
  },
];