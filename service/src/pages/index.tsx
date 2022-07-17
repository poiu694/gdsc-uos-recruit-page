import type { NextPage } from 'next';
import styled from '@emotion/styled';
import { Bottom, Header, theme } from '@gdsc-uos-recruit-page/design-system';
import { useAOS } from '@gdsc-uos-recruit-page/hooks';

import { MainBanner, MainProcess, MainTeam } from '../components';

const Home: NextPage = () => {
  useAOS();

  return (
    <Layout>
      <Header />
      <MainBanner />
      <MainProcess />
      <MainTeam />
      <Bottom />
    </Layout>
  );
};

const Layout = styled.main`
  width: 100%;
  height: auto;

  background-color: ${theme.colors.background};
`;

export default Home;
