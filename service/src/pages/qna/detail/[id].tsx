import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Banner } from '@gdsc-uos-recruit-page/design-system';
import { useGA } from '@gdsc-uos-recruit-page/hooks';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { QuestionListItem } from '../../../../@types/question';
import { Introduction } from '../../../components/common';
import { QuestionBox, TeamList } from '../../../components/Qna';
import { QuestionContent } from '../../../constants';

interface QnaPageProps {
  question: QuestionListItem;
}

const QnaPage: NextPage<QnaPageProps> = ({ question }) => {
  const { logPageView } = useGA();
  logPageView(`/qna/detail/${question?.id ?? ''}`);

  return (
    <Layout>
      <Banner teamName={question?.type ?? 'frontend'} />
      <IntroductionWrapper>
        <Introduction
          title='자주 묻는 질문'
          desc='GDSC UOS에 대해 궁금하시면 질문을 확인해 주세요.'
        />
      </IntroductionWrapper>
      <ContentsWrapper>
        <TeamList teamName={question?.type} />
        <QuestionBox question={question} />
      </ContentsWrapper>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = QuestionContent.all.map((content) => ({
    params: { id: content.id },
  }));

  return {
    paths,
    fallback: true, // false or 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const questionIdx = QuestionContent.all.findIndex(
    (content) => content.id === params!.id
  );

  return {
    props: {
      question: QuestionContent.all[questionIdx],
    },
  };
};

const Layout = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 100px;
`;

const IntroductionWrapper = styled.div`
  ${({ theme }) => css`
    width: 80%;
    margin: 0 auto;

    @media (max-width: ${theme.size.mobile}px) {
      display: none;
    }
  `}
`;

const ContentsWrapper = styled.div`
  ${({ theme }) => css`
    width: 80%;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    @media (max-width: ${theme.size.mobile}px) {
      flex-direction: column-reverse;
      gap: 0;
    }
  `}
`;

export default QnaPage;
