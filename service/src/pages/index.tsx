import type { GetStaticProps, NextPage } from 'next';
import styled from '@emotion/styled';

import main from '@/constants/Main';
import { Helmet } from '@/components/common';
import { useGA, useAOSSideEffect } from '@/hooks';
import type { TitleWithDescription } from '@types';
import { MainBanner, MainProcess, MainTeam } from '@/components';

interface Props {
  contents: {
    banner: string;
    process: {
      content: TitleWithDescription;
      circle: TitleWithDescription[];
    };
    team: TitleWithDescription;
  };
}

const Home: NextPage<Props> = ({ contents }) => {
  const { logPageView } = useGA();
  logPageView('메인 화면 조회');
  useAOSSideEffect();

  return (
    <>
      <Layout>
        <Helmet title="메인" description="GDSC UOS RECRUIT 메인 페이지" />
        <Content>
          <MainBanner banner={contents.banner} />
          <MainProcess content={contents.process.content} circle={contents.process.circle} />
          <MainTeam content={contents.team} />
        </Content>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const contents = main;

  return {
    props: {
      contents,
    },
  };
};

const Layout = styled.main`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  margin-bottom: 100px;
`;

const Content = styled.section`
  &:fisrt-child::before {
    content: '';
  }
`;

export default Home;
