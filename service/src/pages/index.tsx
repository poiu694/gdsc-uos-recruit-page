import type { NextPage } from 'next';
import styled from '@emotion/styled';
import { Header } from '@gdsc-uos-recruit-page/design-system';

import { MainBanner, MainProcess, MainTeam } from '../components';

const Home: NextPage = () => {
  return (
    <Layout>
      <Header />
      <MainBanner />
      <MainProcess />
      <MainTeam />
    </Layout>
  );
};

const Layout = styled.main`
  width: 100%;
  height: auto;
`;

export default Home;
