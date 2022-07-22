import type { NextPage } from 'next';
import styled from '@emotion/styled';
import { theme } from '@gdsc-uos-recruit-page/design-system';
import { useAOS } from '@gdsc-uos-recruit-page/hooks';

import { MainBanner, MainProcess, MainTeam } from '../components';

const Home: NextPage = () => {
  useAOS();

  return (
    <Layout>
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
