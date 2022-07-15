import type { NextPage } from 'next';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  color: ${(props) => props.theme.palette.coreBlue};
`;

const Home: NextPage = () => {
  return <Wrapper>hi</Wrapper>;
};

export default Home;
