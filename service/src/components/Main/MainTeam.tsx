import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Title, Typography } from '@gdsc-uos-recruit-page/design-system';
import { defaultDuration } from '@gdsc-uos-recruit-page/hooks/useAOS';

import { TeamCard } from '../common';
import { TitleWithDescription } from '../../../@types';

interface Props {
  content: TitleWithDescription;
}

const DEFAULT_TAB_VALUE = '1';

function MainTeam({ content }: Props) {
  const [tabValue, setTabValue] = React.useState<string>(DEFAULT_TAB_VALUE);

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

const Wrapper = styled.div`
  ${({ theme }) => css`
    @media (max-width: ${theme.size.mobile}px) {
      min-height: 50vh;
    }
  `}
`;

const TitleWrapper = styled.div`
  ${({ theme }) => css`
    margin-bottom: 5em;

    @media (max-width: ${theme.size.mobile}px) {
      margin-bottom: 2em;
    }
  `}
`;

const TeamCardWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    margin: 3em auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: ${theme.padding.xlg}px;

    @media (min-width: ${theme.size.tabletL + 300}px) {
      margin-top: 8em;
    }
  `}
`;

export default MainTeam;
