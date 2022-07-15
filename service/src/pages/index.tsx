import type { NextPage } from 'next';
import styled from '@emotion/styled';
import { MainBanner, MainProcess, MainTeam } from '../components';
import { Header, theme } from '@gdsc-uos-recruit-page/design-system';

const Home: NextPage = () => {
  return (
    <Layout>
      <Header />
      <MainTeam />
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
