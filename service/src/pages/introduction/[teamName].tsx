import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { css, useTheme } from '@emotion/react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Banner, getTitleCaseTeam, TEAM_LIST, TeamKeyType } from 'gdsc-uos-design-system';

import { useGA } from '@/hooks';
import { IntroductionContent } from '@/constants';
import { GOOGLE_FORM_LINK } from '@/constants/form';
import { IntroductionType, TeamNameProps } from '@types';
import { Helmet, Introduction } from '@/components/common';
import { List, AsideCard } from '@/components/Introduction';

interface IntroductionProps extends TeamNameProps {
  introduction: IntroductionType;
}

const IntroductionPage: NextPage<IntroductionProps> = ({ introduction, teamName }) => {
  const theme = useTheme();
  const router = useRouter();
  const { logEvent, logPageView } = useGA();
  logPageView(`/introduction/${teamName}`);

  const handleClickSupportBtn = () => {
    logEvent('Application', `${teamName}에서 지원하기 클릭`);
    if (window) {
      window.open(GOOGLE_FORM_LINK, '_blank');
    }
  };

  const handleClickQuestionListBtn = () => {
    logEvent('Question', `${teamName}에서 자주 묻는 질문 클릭`);
    router.push(`/qna/${teamName}`);
  };

  return (
    <>
      <Helmet title="소개" description="GDSC UOS RECRUIT 소개 페이지" />
      <Layout>
        <Banner teamName={teamName} />
        <Wrapper>
          <ContentsWrapper>
            <Introduction title={introduction.title} desc={introduction.desc} />
            <List title="저희를 소개할게요" items={introduction.introduction} />
            <List title="저희는 이런 활동을 해요" items={introduction.activities} />
            <List
              title={`${getTitleCaseTeam(teamName)} 팀은 이런 분을 기다립니다`}
              items={introduction.wants}
            />
          </ContentsWrapper>
          <AsideCard
            teamName={teamName}
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
  const paths = Object.values(TEAM_LIST)
    .map((teamName) => ({
      params: { teamName },
    }))
    .filter((path) => path.params.teamName !== 'common');

  return {
    paths: paths,
    fallback: false, // false or 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const introduction = IntroductionContent[params!.teamName as TeamKeyType];

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
`;

const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 80%;
    margin: 0 auto;

    display: grid;
    grid-template-columns: 3fr 1fr;
    justify-content: space-between;

    @media (max-width: ${theme.size.mobile}px) {
      grid-template-columns: 1fr;
    }
  `}
`;

const ContentsWrapper = styled.div`
  ${({ theme }) => css`
    width: 80%;

    display: flex;
    flex-direction: column;

    margin-right: 64px;
    @media (max-width: ${theme.size.mobile}px) {
      width: 100%;
      margin: 0;
    }
  `}
`;

export default IntroductionPage;
