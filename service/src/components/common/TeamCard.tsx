import { useCallback } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { theme, Typography } from '@gdsc-uos-recruit-page/design-system';
import {
  get600Color,
  getJobByTeam,
  getTitleCaseTeam,
} from '@gdsc-uos-recruit-page/design-system/utils/colorUtils';
import { useRouter } from 'next/router';
import { useGA } from '@gdsc-uos-recruit-page/hooks';
import { TeamNameProps } from '../../../@types';

function TeamCard({ teamName }: TeamNameProps) {
  const [team, Developer] = getJobByTeam(teamName); // [0]: Team, [1]: Developer
  const router = useRouter();
  const { logEvent } = useGA();

  const handleClickNav = useCallback(() => {
    logEvent('Team', `${teamName} 로 접근`);
    router.push(`/introduction/${teamName}`);
  }, [router, teamName, logEvent]);

  return (
    <Wrapper teamName={teamName}>
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
        <Typography
          type="h4"
          textAlign="center"
          color={theme.colors.primary.white}
        >
          Detail
        </Typography>
      </BottomNav>
    </Wrapper>
  );
}

const Wrapper = styled.section<TeamNameProps>`
  ${({ theme, teamName }) => css`
    width: 260px;
    height: 300px;
    position: relative;
    transition: all 0.1s ease-in;
    background-color: ${get600Color(teamName)};
    border-radius: 15px;

    @media (max-width: ${theme.size.mobile}px) {
      width: 100%;
      height: 60px;
    }

    &:hover {
      background-color: ${theme.colors.team[teamName]};
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
  padding-left: ${theme.padding.xlg}px;

  @media (max-width: ${theme.size.mobile}px) {
    display: none;
  }
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
    border-top: 1px solid ${theme.colors.background};
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
