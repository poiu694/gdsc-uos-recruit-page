import { TeamContent } from '@gdsc-uos/ui';
import type { IntroductionType } from '@types';

const FrontEndIntroduction = {
  title: 'Frontend Developer',
  desc: 'GDSC UOS Frontend 소개 페이지입니다.',
  introduction: [
    '열정있는 팀원들이 활동합니다.',
    '혼자 아는 것이 아니라, 다 같이 공유하는 것을 지향합니다.',
    '개발적으로 어려운 부분은 같이 머리를 맞대고 헤쳐나갑니다.',
    '다른 팀들과 소통하는 법을 배웁니다.',
    '프로젝트를 배포하면서 자신의 결과물을 보여줄 수 있는 팀입니다.',
  ],
  activity: [
    '데일리 스크럼을 통해 본인의 성장을 공유합니다.',
    '직면한 문제를 공유하고, 서로의 부족한 부분을 채워줍니다.',
    '다양한 웹 프레임워크와 라이브러리를 접할기회를 갖습니다.',
    '다른 팀원들과 같이 프로젝트를 진행합니다.',
    '스프린트를 통해 프론트엔드팀 외적으로도 소통할 수 있습니다.',
  ],
  aside: {
    team: 'Frontend Team',
    experience: '무관',
    needs: ['열정'],
  },
  target: [
    '프론트엔드를 진정으로 하고 싶으신 분',
    '자신의 지식을 공유하는데 거리낌 없으신 분',
    '개발을 잘 몰라 평소에 아이디어만 가지고 계셨던 분',
  ],
} as IntroductionType;

const BackEndIntroduction = {
  title: 'Backend Developer',
  desc: 'GDSC UOS Backend 소개 페이지입니다.',
  introduction: [
    '기존에 연습하던 것들, 하고 있던 프로젝트를 고도화해서 백엔드 지식을 많이 쌓는 것을 지향합니다.',
    'API 작성, 라이브러리 생성, 데이터베이스 통합 등 다양한 개발 활동을 합니다.',
    '아는 것을 서로 공유하며 함께 성장합니다.',
    '개발 공식 문서를 기반으로 자신의 지식을 정리하고 확장합니다.',
    '모르는 것에 대해 자신감 있게 물어보고 함께 고민합니다.',
  ],
  activity: [
    '개인 혹은 팀별 프로젝트를 진행합니다.',
    '데일리 스크럼을 통해 프로젝트 진행상황을 공유합니다!',
    '백엔드팀 스프린트 리뷰를 통해 한달 활동을 피드백합니다.',
    'Tech Talk를 통해 개발 지식을 습득합니다.',
  ],
  aside: {
    team: 'Backend Team',
    experience: '무관',
    needs: ['열정'],
  },
  target: [
    'Backend Team의 목표를 달성하고자 함께 노력 하실 분',
    '세부 목표 중 최소 하나를 목표로 두신 분',
    '데일리 스크럼에 참여할 시간적 여유를 낼 수 있는 분(10분~20분)',
    '커뮤니티를 더 풍요로운 지식교류의 장으로 만드는 데에 관심이 있으신 분',
  ],
} as IntroductionType;

const MobileIntroduction = {
  title: 'Mobile Developer',
  desc: 'GDSC UOS Mobile 소개 페이지입니다.',
  introduction: [
    '안드로이드, IOS를 아우르는 모바일 디바이스를 위한 소프트웨어 개발을 목표로 하는 팀입니다.',
    '원하는 서비스를 만들고 직접 사용해봅니다.',
    '개발 공식 문서를 기반으로 자신의 지식을 정리하고 확장합니다.',
  ],
  activity: [
    '개인 혹은 팀별 프로젝트를 진행합니다.',
    '데일리 스크럼을 통해 프로젝트 진행상황을 공유합니다!',
    '모바일팀 스프린트 리뷰를 통해 한달 활동을 피드백합니다.',
    'Tech Talk를 통해 개발 지식을 습득합니다.',
  ],
  aside: {
    team: 'Mobile Team',
    experience: '무관',
    needs: ['열정'],
  },
  target: [
    '눈에 보이는 피드백이 있는 개발을 하고 싶으신 분',
    '당장 사용할 수 있는 소프트웨어를 개발하기를 원하는 분',
    '평소에 필요했지만 스토어에는 없고 아이디어만 가지고 계셨던 분',
  ],
} as IntroductionType;

const DataMLIntroduction = {
  title: 'Data/ML Developer',
  desc: 'GDSC UOS Data/ML 소개 페이지입니다.',
  introduction: [
    'Deep Learning을 딥하게, Machine Learning을 주도적으로 공부합니다.',
    '사담 나누기를 좋아합니다.',
    '깊은 지식을 나누며 성장합니다.',
    '이론적인 부분을 놓치지 않으려고 노력합니다.',
  ],
  activity: [
    '데일리 스크럼에서 매일 관심 있는 기술, 오늘 있었던 일 등의 이야기를 나눕니다.',
    '매 달 한 명씩 돌아가며 GDSC 블로그에 본인의 관심사를 정리한 글을 포스팅해 지식을 기록합니다.',
    '격주로 한 명씩 돌아가며 논문을 읽고, 내용을 공유하는 페이퍼 리뷰를 합니다.',
    '팀 프로젝트로 외부 대회에 나가기도 합니다.',
  ],
  aside: {
    team: 'Data/ML Team',
    experience: '무관',
    needs: ['열정'],
  },
  target: [
    '머신러닝, 딥러닝을 깊게 공부해보고 싶은 사람',
    '영어로 된 논문을 읽는 것에 부담이 덜한 사람',
    '데이터 분석 덕후들을 만나고 싶은 사람',
    '이 글을 읽고 뇌세포의 전기신호가 Threshold를 넘은 사람',
  ],
} as IntroductionType;

const DesignIntroduction = {
  title: 'Product Designer',
  desc: 'GDSC UOS Design 소개 페이지입니다.',
  introduction: [
    '이번에 신규 창설되는 팀입니다.',
    '프로젝트 전체를 이해하고, 개발자들과 소통하는 법을 배웁니다.',
    '디자인 트렌드를 공유하며 성장을 하려고 합니다.',
    '프로젝트를 배포하면서 자신의 결과물을 보여줄 수 있는 팀입니다.',
  ],
  activity: [
    '포트폴리오 스터디를 진행합니다.',
    '웹-개발 협업에 대한 스터디를 진행합니다.',
    '스크럼 형식, 혹은 세미나 형식으로 주기적인 시간에 만나서 인사이트를 공유합니다.',
    '기존 서비스를 분석하며 더 나은 서비스에 대한 스터디를 진행합니다.',
  ],
  aside: {
    team: 'Design Team',
    experience: '무관',
    needs: ['열정'],
  },
  target: [
    '사용자의 관점에서 더 나은 서비스를 제공하고 싶어하시는 분',
    '책임감을 갖고 꾸준한 활동을 진행하실 수 있는 분',
    '개발자와 소통하여 문제를 해결하실 수 있는 분',
    '함께 하는 것을 좋아하시는 분',
  ],
} as IntroductionType;

export default {
  frontend: FrontEndIntroduction,
  backend: BackEndIntroduction,
  mobile: MobileIntroduction,
  data_ml: DataMLIntroduction,
  // design: DesignIntroduction,
} as TeamContent<IntroductionType>;
