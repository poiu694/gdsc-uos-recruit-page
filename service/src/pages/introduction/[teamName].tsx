import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';

import { Banner, theme } from '@gdsc-uos-recruit-page/design-system';
import { Introduction } from '@components/common';
import { Activity, AsideCard, Introduce } from '@components/Introduction';
import { TeamKeyType, IntroductionType } from '../../../@types';

interface IntroductionProps {
  introduction: IntroductionType;
  teamName: TeamKeyType;
}

const IntroductionPage: NextPage<IntroductionProps> = ({
  introduction,
  teamName,
}) => {
  const router = useRouter();

  const handleClickSupportBtn = () => {
    router.push(`/qna/${teamName}`);
  };

  const handleClickQuestionListBtn = () => {
    router.push(`/qna/${teamName}`);
  };

  return (
    <>
      <Layout>
        <Banner />
        <Wrapper>
          <ContentsWrapper>
            <Introduction title={introduction.title} desc={introduction.desc} />
            <Introduce desc={introduction.introduction} />
            <Activity activies={introduction.activities} />
          </ContentsWrapper>
          <AsideCard
            aside={introduction.aside}
            handleClickQuestionListBtn={handleClickQuestionListBtn}
            handleClickSupportBtn={handleClickSupportBtn}
          />
        </Wrapper>
      </Layout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { teamName: 'frontend' } },
      { params: { teamName: 'backend' } },
      { params: { teamName: 'mobile' } },
      { params: { teamName: 'data_ml' } },
    ],
    fallback: false, // false or 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const introduction = {
    title: 'Frontend',
    desc: 'GDSC UOS Frontend 소개 페이지입니다.',
    introduction:
      '동해물과 백두산이  마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세 동해물과 백두산이  마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려강산 대한사람 대한  으로 길이 보전하세 ',
    activities: ['테크톡', '기술 블로그 글 작성', '데일리 스크럼'],
    aside: {
      team: 'Frontend Team',
      experience: '무관',
      needs: ['HTML5', 'CSS3', 'Javascript'],
    },
  } as IntroductionType;

  return {
    props: {
      introduction,
      teamName: params!.teamName,
    },
  };
};

const Layout = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 100px;

  background-color: ${theme.colors.background};
`;

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 3fr 1fr;
  justify-content: space-between;

  @media (max-width: ${theme.size.mobile}px) {
    grid-template-columns: 1fr;
  }
`;

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-right: 64px;
  @media (max-width: ${theme.size.mobile}px) {
    margin: 0;
  }
`;

export default IntroductionPage;
