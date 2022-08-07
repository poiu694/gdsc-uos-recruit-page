import type { NextPage } from 'next';
import styled from '@emotion/styled';
import { useAOS, useGA } from '@gdsc-uos-recruit-page/hooks';
import useSWR from 'swr';

import { fetcher } from '../../src/utils';
import { MainBanner, MainProcess, MainTeam } from '../components';
import { Helmet } from '../components/common';

const Home: NextPage = () => {
  const { data, error } = useSWR('/api/main', fetcher);
  const { logPageView } = useGA();
  logPageView('/');
  useAOS();

  if (error) return <div>Failed to load</div>;
  console.log(data);
  if (!data) return null;

  return (
    <Layout>
      <Helmet title='메인' description='GDSC UOS RECRUIT 메인 페이지' />
      <MainBanner banner={data.banner} />
      <MainProcess
        content={data.process.content}
        circle={data.process.circle}
      />
      <MainTeam content={data.team} />
    </Layout>
  );
};

const Layout = styled.main`
  width: 100%;

  & > img {
    width: 50%;
  }
`;

export default Home;
