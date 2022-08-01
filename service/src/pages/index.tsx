import type { NextPage } from 'next';
import styled from '@emotion/styled';
import { useAOS, useGA } from '@gdsc-uos-recruit-page/hooks';
import useSWR from 'swr';

import { fetcher } from '../../src/utils';

import { MainBanner, MainProcess, MainTeam } from '../components';

const Home: NextPage = () => {
  const { data, error } = useSWR('/api/main', fetcher);
  const { logPageView } = useGA();
  logPageView('/');
  useAOS();

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Layout>
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
`;

export default Home;
