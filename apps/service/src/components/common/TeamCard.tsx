import { useCallback } from 'react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { css, useTheme } from '@emotion/react';
import { Typography, get600Color, getJobByTeam, getTitleCaseTeam, get400Color } from '@gdsc-uos/ui';

import { useGA } from '@/hooks';
import { TeamNameProps } from '@types';
import { useThemeContext } from './CustomThemeProvider';

function TeamCard({ teamName }: TeamNameProps) {
  const theme = useTheme();
  const { theme: userTheme } = useThemeContext();
  const router = useRouter();
  const { logEvent } = useGA();
  const [team, Developer] = getJobByTeam(teamName); // [0]: Team, [1]: Developer

  const handleClickNav = useCallback(() => {
    logEvent('Team', `${teamName} 로 접근`);
    router.push(`/introduction/${teamName}`);
  }, [router, teamName, logEvent]);

  return (
    <Wrapper teamName={teamName} isDark={userTheme === 'dark'}>
      <TitleWrapper type="h4" color={theme.colors.primary.white}>
        {getTitleCaseTeam(teamName)}
      </TitleWrapper>

      <Description>
        <Typography type="h6" color={theme.palette.gray50}>
          {team}
        </Typography>
        <Typography type="h6" color={theme.palette.gray50}>
          {Developer}
        </Typography>
      </Description>

      <BottomNav onClick={handleClickNav}>
        <Typography type="h5" textAlign="center" color={theme.colors.primary.white}>
          Detail
        </Typography>
      </BottomNav>
    </Wrapper>
  );
}

type StyleProps = TeamNameProps & { isDark: boolean };
const Wrapper = styled.section<StyleProps>`
  ${({ theme, teamName, isDark }) => css`
    width: 320px;
    height: 300px;
    position: relative;
    transition: all 0.1s ease-in;
    background-color: ${isDark ? get400Color(teamName) : get600Color(teamName)};
    border-radius: 15px;

    @media (max-width: ${theme.size.mobile}px) {
      width: 100%;
      height: 60px;
    }

    &:hover {
      background-color: ${isDark ? get600Color(teamName) : theme.colors.team[teamName]};
    }
  `}
`;

const TitleWrapper = styled(Typography)`
  ${({ theme }) => css`
    padding: ${theme.padding.xlg}px;

    @media (max-width: ${theme.size.mobile}px) {
      padding: ${theme.padding.sm};

      position: relative;
      top: 50%;
      -ms-transform: translateY(-50%);
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
    }
  `}
`;

const Description = styled.div`
  ${({ theme }) => css`
    padding-left: ${theme.padding.xlg}px;

    @media (max-width: ${theme.size.mobile}px) {
      display: none;
    }
  `}
`;

const BottomNav = styled.button`
  ${({ theme }) => css`
    width: 100%;
    padding-top: 4px;
    padding-bottom: 4px;
    position: absolute;
    bottom: 0;
    cursor: pointer;
    border: none;
    border-top: 1px solid ${theme.colors.ui.border};
    outline: none;
    border-radius: 0px 0px 15px 15px;
    background-color: transparent;

    @media (max-width: ${theme.size.mobile}px) {
      width: 30%;
      height: 100%;
      right: 0;
      border: none;

      border-radius: 0px 15px 15px 0;
    }
  `}
`;

export default TeamCard;
