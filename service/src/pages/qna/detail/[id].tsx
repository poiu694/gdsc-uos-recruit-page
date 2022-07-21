import styled from "@emotion/styled";
import { Banner, theme } from "@gdsc-uos-recruit-page/design-system";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

import { QuestionListItem } from "../../../../@types/question";
import { Introduction } from "../../../components/common";
import { QuestionBox, TeamList } from "../../../components/Qna";
import { IntroductionWrapper } from "../[teamName]";

interface QnaPageProps {
  question: QuestionListItem;
}

const QnaPage: NextPage<QnaPageProps> = ({ question }) => {
  return (
    <Layout>
      <Banner />
      <IntroductionWrapper>
        <Introduction
          title="자주 묻는 질문"
          desc="GDSC UOS에 대해 궁금하시면 질문을 확인해 주세요."
        />
      </IntroductionWrapper>
      <ContentsWrapper>
        <TeamList />
        <QuestionBox question={question} />
      </ContentsWrapper>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = new Array(30).map((_, idx) => ({
    params: { id: String(idx) },
  }));

  return {
    paths,
    fallback: true, // false or 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const question = {
    title: "지원 마감이 언제까지 일까요? 1",
    url: "/qna/detail/1",
    desc: "동해물과 백두산이  마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세 동해물과 백두산이  마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려강산 대한사람 대한  으로 길이 보전하세 ",
  };
  return {
    props: {
      question,
    },
  };
};

const Layout = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 100px;

  background-color: ${theme.colors.background};
`;

const ContentsWrapper = styled.div`
  width: 80%;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  @media (max-width: ${theme.size.mobile}px) {
    flex-direction: column-reverse;
    gap: 0;
  }
`;

export default QnaPage;
