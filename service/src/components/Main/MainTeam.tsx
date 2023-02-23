import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Title, Typography } from 'gdsc-uos-design-system';

import { TeamCard } from '@/components/common';
import { TitleWithDescription } from '@types';
import { defaultDuration } from '@/hooks/useAOSSideEffect';

interface Props {
  content: TitleWithDescription;
}

function MainTeam({ content }: Props) {
  return (
    <Wrapper>
      <TitleWrapper data-aos="fade-up" data-aos-duration={defaultDuration}>
        <Typography type="h1" textAlign="center">
          Team
        </Typography>
      </TitleWrapper>
      <Title
        data-aos="fade-up"
        data-aos-duration={defaultDuration}
        title={content.title}
        descriptions={content.desc}
      />
      <TeamCardWrapper data-aos="fade-up" data-aos-duration={defaultDuration}>
        <TeamCard teamName="frontend" />
        <TeamCard teamName="backend" />
        <TeamCard teamName="mobile" />
        <TeamCard teamName="data_ml" />
        <TeamCard teamName="design" />
      </TeamCardWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const TitleWrapper = styled.div`
  ${({ theme }) => css`
    margin-bottom: 80px;

    @media (max-width: ${theme.size.mobile}px) {
      margin-bottom: 32px;
    }
  `}
`;

const TeamCardWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    margin: 48px auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: ${theme.padding.xlg}px;

    @media (min-width: ${theme.size.tabletL + 300}px) {
      margin-top: 96px;
    }
  `}
`;

export default MainTeam;
