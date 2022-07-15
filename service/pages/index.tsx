import type { NextPage } from 'next';
import styled from '@emotion/styled';
import { TeamCard, Title } from '@gdsc-uos-recruit-page/design-system';

const Wrapper = styled.div`
  color: ${(props) => props.theme.colors.text.general};
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
      <div style={{ display: 'flex', gap: '20px' }}>
        <TeamCard
          type='Frontend'
          handleClickNav={() => console.log('frontend')}
        />
        <TeamCard
          type='Backend'
          handleClickNav={() => console.log('Backend')}
        />
        <TeamCard type='Mobile' handleClickNav={() => console.log('Mobile')} />
        <TeamCard type='DA/ML' handleClickNav={() => console.log('DA/ML')} />
      </div>
    </Wrapper>
  );
};

export default Home;
