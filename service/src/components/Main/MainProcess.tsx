import styled from '@emotion/styled';
import { TeamCard, Title } from '@gdsc-uos-recruit-page/design-system';

function MainProcess() {
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
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export default MainProcess;
