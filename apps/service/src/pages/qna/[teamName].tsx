import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Banner, TEAM_LIST, TeamKeyType } from '@gdsc-uos/ui';

import { useGA } from '@/hooks';
import { TeamList } from '@/components/Qna';
import { QuestionContent } from '@/constants';
import QuestionList from '@/components/Qna/QuestionList';
import { TeamNameProps, QuestionListItem } from '@types';
import { Helmet, Introduction } from '@/components/common';

interface QnaListPageProps extends TeamNameProps {
  questions: QuestionListItem[];
}

const QnaListPage: NextPage<QnaListPageProps> = ({ questions, teamName }) => {
  const { logPageView } = useGA();
  logPageView(`${teamName} 질문 페이지 조회`);

  return (
    <>
      <Helmet title="자주 묻는 질문" description="GDSC UOS RECRUIT 자주 묻는 질문 페이지" />
      <Layout>
        <Banner teamName={teamName} />
        <IntroductionWrapper
          title="자주 묻는 질문"
          desc="GDSC UOS에 대해 궁금하시면 질문을 확인해 주세요."
        />
        <ContentsWrapper>
          <TeamList teamName={teamName} />
          <QuestionList questions={questions} teamName={teamName} />
        </ContentsWrapper>
      </Layout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.values(TEAM_LIST)
    .filter((team) => team !== 'design')
    .map((teamName) => ({
      params: { teamName },
    }));

  return {
    paths,
    fallback: false, // false or 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const questions = QuestionContent[params!.teamName as TeamKeyType];

  return {
    props: {
      questions,
      teamName: params!.teamName,
    },
  };
};

const Layout = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 100px;
`;

const IntroductionWrapper = styled(Introduction)`
  width: 80%;
  margin-bottom: 20px;
`;

const ContentsWrapper = styled.div`
  ${({ theme }) => css`
    width: 80%;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    gap: 96px;
    @media (max-width: ${theme.size.mobile}px) {
      flex-direction: column-reverse;
    }
  `}
`;

export default QnaListPage;
