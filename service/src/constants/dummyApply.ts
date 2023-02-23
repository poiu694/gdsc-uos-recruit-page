import { ApplyQuestion } from '@types';

const COMMON_QUESTIONS: ApplyQuestion[] = [
  {
    title: '앞으로 1년간 학부생 신분으로 활동하실 수 있는 상태인가요?',
    maxLength: 100,
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
    title: '지원 동기와 GDSC에서 무엇을 하고 싶은지를 알려주세요!',
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
    title: '관심 있는 개발 분야와 해당 능력을 향상하기 위해 노력해보셨던 경험을 들려주세요!',
    maxLength: 500,
    required: true,
  },
  {
    title: '개발 관련하여 자신 있는 분야, 대외활동, 인턴 등 자신의 자랑거리를 모두 적어주세요!🙂',
    maxLength: 500,
    required: true,
  },
  {
    title: '사용하시는 깃헙(GitHub) 아이디를 적어주세요.',
    maxLength: 100,
    required: false,
  },
];

const TEAM_QUESTIONS: ApplyQuestion[] = [
  {
    title: '기술적인 궁금증이 생겨서 찾아봤던 경험을 소개해주세요.',
    maxLength: 500,
    required: false,
  },
  {
    title: '선택해주신 분야에 대한 대외활동이나 프로젝트 경험을 공유해주세요!',
    maxLength: 500,
    required: false,
  },
];

const CORE_QUESTIONS: ApplyQuestion[] = [
  {
    title: 'Core Member로서 운영하고 싶은 팀의 분야를 적어주세요! (예 : Design, Blog 등)',
    maxLength: 100,
    required: true,
  },
  {
    title: 'Core Member로서 팀을 어떻게 이끌고 싶으신가요?',
    maxLength: 500,
    required: true,
  },
  {
    title:
      'Core Member로서 GDSC UOS에서 하고 싶은 일을 적어주세요! (예 : 행사 운영, 팀 관리, 행사 포스터 제작 등 자유롭게 적어주시면 돼요 🙂)',
    maxLength: 500,
    required: true,
  },
];

export const QUESTIONS: Record<`${number}`, ApplyQuestion[]> = {
  '1': COMMON_QUESTIONS,
  '2': TEAM_QUESTIONS,
  '3': CORE_QUESTIONS
};
