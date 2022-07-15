import styled from '@emotion/styled';
import {
  TeamCard,
  theme,
  Title,
  Typography,
} from '@gdsc-uos-recruit-page/design-system';

function MainTeam() {
  return (
    <Wrapper>
      <TitleWrapper>
        <Typography type='h1' textAlign='center'>
          Team
        </Typography>
      </TitleWrapper>
      <Title
        title='Show us your Passion !'
        desc1='성장하고 싶어하고 열정적인 사람을 찾고 있습니다.'
        desc2='당신의 열정을 뽐내주세요.'
      />
      <TeamCardWrapper>
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
      </TeamCardWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 80%;
  min-height: 100%;
  position: relative;

  margin: 0 auto;
`;

const TitleWrapper = styled.div`
  margin: 1em 0 5em 0;
`;

const TeamCardWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 4em auto 0px 0px;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;
`;

export default MainTeam;
