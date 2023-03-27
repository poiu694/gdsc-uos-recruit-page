import styled from '@emotion/styled';
import { css, useTheme } from '@emotion/react';
import { Title, Typography } from '@gdsc-uos/ui';

import { useDarkTheme } from '@/hooks';
import { TitleWithDescription } from '@types';
import { TeamCard } from '@/components/common';
import { defaultDuration } from '@/hooks/useAOSSideEffect';

interface Props {
  content: TitleWithDescription;
}

function MainTeam({ content }: Props) {
  const theme = useTheme();
  const { isDark } = useDarkTheme();

  return (
    <Wrapper>
      <TitleWrapper data-aos="fade-up" data-aos-duration={defaultDuration}>
        <Typography type="h1" textAlign="center" color={theme.colors.text.bold}>
          Team
        </Typography>
      </TitleWrapper>
      <Title
        isDark={isDark}
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
        {/* <TeamCard teamName="design" /> */}
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

    @media (min-width: ${theme.size.tabletL}px) {
      margin-top: 96px;

      // design 없을 경우
      & > section {
        width: 35%;
      }
    }
  `}
`;

export default MainTeam;
