import type { NextPage } from 'next';
import styled from '@emotion/styled';
import { MainBanner, MainProcess, MainTeam } from '../components';

const Home: NextPage = () => {
  return (
    <Layout>
      <MainTeam />
      <MainTeam />
      <MainTeam />
    </Layout>
  );
};

const Layout = styled.main`
  width: 100%;
  height: 100vh;
`;

const ContentsWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export default Home;
