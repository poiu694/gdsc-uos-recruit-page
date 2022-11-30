import type { NextPage } from 'next';
import styled from '@emotion/styled';
import { useAOS, useGA } from '@gdsc-uos-recruit-page/hooks';
import useSWR from 'swr';

import { fetcher } from '../../src/utils';
import { MainBanner, MainProcess, MainTeam } from '../components';
import { Bottom, Helmet } from '../components/common';

const Home: NextPage = () => {
  const { data, error } = useSWR('/api/main', fetcher);
  const { logPageView } = useGA();
  logPageView('메인 화면 조회');
  useAOS();

  if (error) return <div>Failed to load</div>;
  if (!data) return null;

  return (
    <Layout>
      <Helmet title='메인' description='GDSC UOS RECRUIT 메인 페이지' />
      <Content>
        <MainBanner banner={data.banner} />
        <MainProcess
          content={data.process.content}
          circle={data.process.circle}
        />
        <MainTeam content={data.team} />
      </Content>
      <Bottom />
    </Layout>
  );
};

const Layout = styled.main`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  margin-bottom: 100px;
`;

const Content = styled.section`
  min-height: 300vh;

  &:fisrt-child::before {
    content: '';
    min-height: 300vh;
  }
`;

export default Home;
