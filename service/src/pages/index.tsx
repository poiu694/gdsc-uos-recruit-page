import type { NextPage } from 'next';
import styled from '@emotion/styled';

import { useGA, useAOSSideEffect } from '../hooks';
import main from '../constants/Main';
import { MainBanner, MainProcess, MainTeam } from '../components';
import { Bottom, Helmet } from '../components/common';

const Home: NextPage = () => {
  const mainData = main;
  const { logPageView } = useGA();
  logPageView('메인 화면 조회');
  useAOSSideEffect();

  return (
    <>
      <Layout>
        <Helmet title="메인" description="GDSC UOS RECRUIT 메인 페이지" />
        <Content>
          <MainBanner banner={mainData.banner} />
          <MainProcess content={mainData.process.content} circle={mainData.process.circle} />
          <MainTeam content={mainData.team} />
        </Content>
      </Layout>
      <Bottom />
    </>
  );
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
