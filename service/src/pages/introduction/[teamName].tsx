import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';

import { Banner, theme } from '@gdsc-uos-recruit-page/design-system';
import { Introduction } from '../../components/common';
import { Activity, AsideCard, Introduce } from '../../components/Introduction';
import { TeamKeyType, IntroductionType } from '../../../@types';
import { IntroductionContent } from '../../constants';

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
  width: 80%;

  display: flex;
  flex-direction: column;

  margin-right: 64px;
  @media (max-width: ${theme.size.mobile}px) {
    margin: 0;
  }
`;

export default IntroductionPage;
