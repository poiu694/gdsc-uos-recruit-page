import type { GetStaticProps, NextPage } from 'next';
import styled from '@emotion/styled';
import { useAOS } from '@gdsc-uos-recruit-page/hooks';
import path from 'path';
import useSWR from 'swr';

import { MainBanner, MainProcess, MainTeam } from '../components';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Home: NextPage = () => {
  const { data, error } = useSWR('/api/main', fetcher);
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
