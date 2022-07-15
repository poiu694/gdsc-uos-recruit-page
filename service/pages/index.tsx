import type { NextPage } from 'next';
import styled from '@emotion/styled';
import { Title } from '@gdsc-uos-recruit-page/design-system';

const Wrapper = styled.div`
  color: ${(props) => props.theme.palette.coreBlue};
`;

const Home: NextPage = () => {
  return (
    <Wrapper>
      hi
      <Title
        title='Show us your Passion !'
        desc1='성장하고 싶어하고 열정적인 사람을 찾고 있습니다.'
        desc2='당신의 열정을 뽐내주세요.'
      />
    </Wrapper>
  );
};

export default Home;
