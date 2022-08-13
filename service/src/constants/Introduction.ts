import { TeamContent } from '@gdsc-uos-recruit-page/design-system/@types/Team';
import { IntroductionType } from '../../@types';

const FrontEndIntroduction = {
  title: 'Frontend Developer',
  desc: 'GDSC UOS Frontend 소개 페이지입니다.',
  introduction: [],
  activities: ['테크톡', '기술 블로그 글 작성', '데일리 스크럼'],
  aside: {
    team: 'Frontend Team',
    experience: '무관',
    needs: ['HTML5', 'CSS3', 'Javascript'],
  },
} as IntroductionType;

const BackEndIntroduction = {
  title: 'Backend Developer',
  desc: 'GDSC UOS Backend 소개 페이지입니다.',
  introduction: [],
  activities: ['테크톡', '기술 블로그 글 작성', '데일리 스크럼'],
  aside: {
    team: 'Backend Team',
    experience: '무관',
    needs: ['JAVA', 'Node', 'Go'],
  },
} as IntroductionType;

const MobileIntroduction = {
  title: 'Mobile Developer',
  desc: 'GDSC UOS Mobile 소개 페이지입니다.',
  introduction: [],
  activities: ['테크톡', '기술 블로그 글 작성', '데일리 스크럼'],
  aside: {
    team: 'Mobile Team',
    experience: '무관',
    needs: ['Android', 'React Native', 'Swift'],
  },
} as IntroductionType;

const DataMLIntroduction = {
  title: 'Data/ML Developer',
  desc: 'GDSC UOS Data/ML 소개 페이지입니다.',
  introduction: [],
  activities: ['테크톡', '기술 블로그 글 작성', '데일리 스크럼'],
  aside: {
    team: 'Data/ML Team',
    experience: '무관',
    needs: ['Python', 'Pytorch', 'Colab'],
  },
} as IntroductionType;


export default Object.freeze({
  frontend: FrontEndIntroduction,
  backend: BackEndIntroduction,
  mobile: MobileIntroduction,
  data_ml: DataMLIntroduction
} as TeamContent<IntroductionType>);