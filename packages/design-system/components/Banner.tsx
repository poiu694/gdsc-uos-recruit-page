import styled from '@emotion/styled';
import { theme } from '../theme';

const Banner = () => {
  return <Wrapper></Wrapper>;
};

const Wrapper = styled.div`
  width: 100%;
  height: 240px;

  margin: 80px auto;

  background-color: ${theme.colors.primary.yellow};
  content: '';
`;

export default Banner;
