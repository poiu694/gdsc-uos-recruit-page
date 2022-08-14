import { ParsedUrlQuery } from 'querystring';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { TeamKeyType } from '@gdsc-uos-recruit-page/design-system/@types/Team';
import { Banner } from '@gdsc-uos-recruit-page/design-system';
import { useGA } from '@gdsc-uos-recruit-page/hooks';

import { QuestionListItem } from '../../../@types/question';
import { Helmet, Introduction } from '../../components/common';
import { TeamList } from '../../components/Qna';
import QuestionList from '../../components/Qna/QuestionList';
import { QuestionContent } from '../../constants/';
import { TeamNameProps } from '../../../@types';

interface Params extends ParsedUrlQuery {
  teamName: TeamKeyType;
}

interface QnaListPageProps extends TeamNameProps {
  questions: QuestionListItem[];
}

const QnaListPage: NextPage<QnaListPageProps> = ({ questions, teamName }) => {
  const { logPageView } = useGA();
  logPageView(`${teamName} 질문 페이지 조회`);

  return (
    <>
      <Helmet
        title='자주 묻는 질문'
        description='GDSC UOS RECRUIT 자주 묻는 질문 페이지'
      />
      <Layout>
        <Banner teamName={teamName} />
        <IntroductionWrapper
          title='자주 묻는 질문'
          desc='GDSC UOS에 대해 궁금하시면 질문을 확인해 주세요.'
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
  return {
    paths: [
      { params: { teamName: 'common' } },
      { params: { teamName: 'frontend' } },
      { params: { teamName: 'backend' } },
      { params: { teamName: 'mobile' } },
      { params: { teamName: 'data_ml' } },
      { params: { teamName: 'design' } },
    ],
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
  margin: 0 auto;
`;

const ContentsWrapper = styled.div`
  ${({ theme }) => css`
    width: 80%;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    @media (max-width: ${theme.size.mobile}px) {
      flex-direction: column-reverse;
    }
  `}
`;

export default QnaListPage;
