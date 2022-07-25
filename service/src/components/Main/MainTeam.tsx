import styled from '@emotion/styled';
import {
  TeamCard,
  theme,
  Title,
  Typography,
} from '@gdsc-uos-recruit-page/design-system';
import { defaultDuration } from '@gdsc-uos-recruit-page/hooks/useAOS';
import { TitleTwoDesc } from '../../../@types';
import { StyledAOSEmptyWrapper } from '.';

interface MainTeamProps {
  content: TitleTwoDesc;
}

function MainTeam({ content }: MainTeamProps) {
  return (
    <Wrapper>
      <TitleWrapper data-aos='fade-up' data-aos-duration={defaultDuration}>
        <Typography type='h1' textAlign='center'>
          Team
        </Typography>
      </TitleWrapper>
      <StyledAOSEmptyWrapper
        data-aos='fade-up'
        data-aos-duration={defaultDuration}
      >
        <Title
          title={content.title}
          desc1={content.desc1}
          desc2={content.desc2}
        />
      </StyledAOSEmptyWrapper>
      <TeamCardWrapper data-aos='fade-up' data-aos-duration={defaultDuration}>
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
  min-height: 85vh;
  position: relative;

  margin: 60px auto;
  @media (max-width: ${theme.size.mobile}px) {
    min-height: 50vh;
  }
`;

const TitleWrapper = styled.div`
  margin-bottom: 5em;

  @media (max-width: ${theme.size.mobile}px) {
    margin-bottom: 2em;
  }
`;

const TeamCardWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 3em auto;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${theme.padding.xlg}px;

  @media (min-width: ${theme.size.tabletL + 300}px) {
    margin-top: 8em;
  }
`;

export default MainTeam;
