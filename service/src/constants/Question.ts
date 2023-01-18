import { TeamContent } from 'gdsc-uos-design-system';
import { QuestionListItem } from '../../@types';

const CommonQuestion = [
  {
    id: '1',
    type: 'common',
    url: '/qna/detail/1',
    title: '지원 마감이 언제까지 일까요?',
    desc: '이번 Recruit은 8월 29일까지 서류를 마감합니다.\n\n9월 1일에 합격 불합격 상관없이 서류 결과 발표를 진행합니다.\n\n 9월 3일부터 9월 9일까지 인터뷰 비대면 면접을 진행하며, 9월 14일에 최종 결과를 알려드립니다.',
  },
  {
    id: '2',
    type: 'common',
    url: '/qna/detail/2',
    title: '왜 1인 1 프로젝트를 권장하나요?',
    desc: '프로젝트 활동은 곧 모르는 걸 자신의 것으로 만드는 활동을 의미합니다.\n\n매일 꾸준히 실천하며 남기는 발자국들은 멋진 결과물로 이어질 것이고, 이는 곧 ‘무엇이든지 할 수 있다’는 자신감이 돼 돌아옵니다.\n\n여러분도 이런 프로젝트의 매력에 빠지시길 바라며 권장합니다.',
  },
  {
    id: '3',
    type: 'common',
    url: '/qna/detail/3',
    title: '왜 데일리 스크럼을 하나요?',
    desc: '데일리 스크럼은 매일매일 꾸준히, 성실하게 진행해야 하는 활동입니다.\n\n물론 하루도 빠짐없이 활동에 참여하는 게 쉬운 일은 아니지만, 지속적인 소통을 통해 서로의 인사이트를 나누다 보면 공부 기록과 개발 과정이 자연스럽게 정리되고, 어느새 서로 자극이 될 만큼 성장해있을 것입니다.\n\n또, 그 과정에서 동료와 쌓이는 유대감은 여러분에게 GDSC 커뮤니티 일원으로서 자부심을 안겨줄 겁니다.',
  },
  {
    id: '4',
    type: 'common',
    url: '/qna/detail/4',
    title: '주기적으로 하는 활동은 무엇이 있나요?',
    desc: '전체 스프린트 회의 : 팀 구분 없이 한 달을 주기로 개발 진행 현황 및 다음 스프린트 계획을 공유하는 활동입니다.\n\n기술 블로그 활동 : 팀별로 매달 한 명씩 자신이 속한 분야에 관련한 기술 블로그를 작성하는 활동입니다.\n\n<a href="https://gdsc-university-of-seoul.github.io/" target="_blank">블로그 링크 바로가기</a>',
  },
];

const FrontQuestion = [
  {
    id: '101',
    type: 'frontend',
    url: '/qna/detail/101',
    title: '리액트를 꼭 할 줄 알아야 하나요?',
    desc: '못해도 괜찮습니다.',
  },
  {
    id: '102',
    type: 'frontend',
    url: '/qna/detail/102',
    title: '테크톡은 어떻게 진행이 되나요?',
    desc: '매달 프론트엔드 코어멤버 주도하에, 주제를 선정하고 준비시간을 가집니다.\n\n당일날에는 토론 형식, 발표 형식 등 자유로운 형태로 준비했던 내용을 공유합니다.',
  },
  {
    id: '103',
    type: 'frontend',
    url: '/qna/detail/103',
    title: '프론트엔드를 처음 시작해도 괜찮을까요?',
    desc: 'GDSC UOS 프론트엔드팀은 현재 실력이 중요하지 않습니다.\n\n대신에, 계획과 목표를 가지고 꾸준하게 앞으로 가는 사람들을 선호합니다.',
  },
];

const BackQuestion = [
  {
    id: '201',
    type: 'backend',
    url: '/qna/detail/201',
    title: '스프링을 꼭 알아야 하나요?',
    desc: '아닙니다! 백엔드 개발에서 중요한 본질은 "네트워크 개념을 얼마나 잘 이해하고, DB를 얼마나 잘 이해하고, 이를 어떻게 응용할 수 있는가"입니다.',
  },
  {
    id: '202',
    type: 'backend',
    url: '/qna/detail/202',
    title: '어떤 활동을 주로 하나요?',
    desc: '데일리 스크럼을 주 활동으로 생각해주시면 됩니다.\n\n프로젝트를 진행하면서 만났던 이슈들을 공유하거나, 주기적으로 진행되는 TechTalk을 통해서 개발 지식을 습득합니다.',
  },
  {
    id: '203',
    type: 'backend',
    url: '/qna/detail/203',
    title: '이달의 목표는 어떻게 설정하면 될까요?',
    desc: '백엔드 팀의 월별 일정과 이달의 목표는 멤버분들의 니즈에 맞추어질 예정입니다.\n\n팀별 온보딩이 9월 중순쯤 진행될 예정이고 그 자리에서 각자의 목표를 들어본 후에 월별 일정을 구체화할 계획입니다.',
  },
];

const MobileQuestion = [
  {
    id: '301',
    type: 'mobile',
    url: '/qna/detail/301',
    title: '모바일 개발은 어떤 언어를 사용하나요?',
    desc: '안드로이드는 자바/코틀린, IOS는 Swift, 크로스플랫폼 언어로 Flutter 등이 주로 사용됩니다.',
  },
  {
    id: '302',
    type: 'mobile',
    url: '/qna/detail/302',
    title: '코틀린? 자바만 알고 있는데 어려울까요?',
    desc: '코틀린은 자바와 100% 호환되면서도, 사용성과 성능 면에서 개선이 이뤄진 언어입니다.\n\n자바를 알고 있다면 쉽게 배울 수 있습니다.',
  },
  {
    id: '303',
    type: 'mobile',
    url: '/qna/detail/303',
    title: '모바일 개발이 처음이어도 괜찮을까요?',
    desc: '걱정하지 않으셔도 됩니다.\n\n소프트웨어 개발 경험만 있다면 필요한 지식은 크게 다르지 않습니다.',
  },
];

const DataMLQuestion = [
  {
    id: '401',
    type: 'data_ml',
    url: '/qna/detail/401',
    title: 'Tensorflow, PyTorch를 알아야 하나요?',
    desc: '아니요, 잘 몰라도 됩니다! 들어와서 공부를 시작하고 그 과정을 저희에게 들려주시면 좋겠습니다.',
  },
  {
    id: '402',
    type: 'data_ml',
    url: '/qna/detail/402',
    title: '기본적인 개념이 잘 안잡혀 있는데 괜찮나요?',
    desc: '물론 들어오셔서 공부하셔도 무방하지만, 영어로 된 논문을 읽고 공유하는 페이퍼 리뷰 활동이 조금 버거우실 수도 있습니다.',
  },
];

const DesignQuestion = [
  {
    id: '501',
    type: 'design',
    url: '/qna/detail/501',
    title: '기존에는 어떤 활동을 진행했나요?',
    desc: 'GDSC UOS Design Team은 이번에 첫 활동을 시작합니다.\n\n기존에 활동은 없었지만, 앞으로는 포트폴리오 스터디, 개발자와 소통해보는 경험, 기존 서비스를 분석하고 더 나은 서비스를 제공하려는 스터디 등을 생각하고 있습니다.',
  },
  {
    id: '502',
    type: 'design',
    url: '/qna/detail/502',
    title: '주로 어떤 툴을 사용하면 좋을까요?',
    desc: '원하시는 툴이 있다면 해당 툴을 사용하셔도 됩니다.\n\n개발자와 협업을 위해 Figma, Zeplin 등을 많이 사용하며, Sketch, XD 툴도 많이 사용합니다.',
  },
];

export default {
  common: CommonQuestion,
  frontend: FrontQuestion,
  backend: BackQuestion,
  mobile: MobileQuestion,
  data_ml: DataMLQuestion,
  design: DesignQuestion,
} as TeamContent<QuestionListItem[]>