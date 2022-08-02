import React, { useCallback } from 'react';
import styled from '@emotion/styled';
import { theme, Typography } from '@gdsc-uos-recruit-page/design-system';
import { TeamValueType } from '@gdsc-uos-recruit-page/design-system/@types/Team';
import {
  get400Color,
  getJobByTeam,
  getTitleCaseTeam,
} from '@gdsc-uos-recruit-page/design-system/utils/colorUtils';
import { useRouter } from 'next/router';
import { useGA } from '@gdsc-uos-recruit-page/hooks';

interface TeamProps {
  type: TeamValueType;
}

function TeamCard({ type }: TeamProps) {
  const [team, Developer] = getJobByTeam(type); // [0]: Team, [1]: Developer
  const router = useRouter();
  const { logEvent } = useGA();

  const handleClickNav = useCallback(() => {
    logEvent('route(team)', `move to ${type}`);
    router.push(`/introduction/${type}`);
  }, [router, type, logEvent]);

  return (
    <Wrapper type={type}>
      <Title>
        <Typography type='h4' color={theme.colors.primary.white}>
          {getTitleCaseTeam(type)}
        </Typography>
      </Title>

      <Description>
        <Typography type='h6' color={theme.palette.gray50}>
          {team}
        </Typography>
        <Typography type='h6' color={theme.palette.gray50}>
          {Developer}
        </Typography>
      </Description>

      <BottomNav onClick={handleClickNav}>
        <Typography
          type='h4'
          textAlign='center'
          color={theme.colors.primary.white}
        >
          Detail
        </Typography>
      </BottomNav>
    </Wrapper>
  );
}

const Wrapper = styled.section<TeamProps>`
  width: 260px;
  height: 300px;
  position: relative;
  background-color: ${(props) => get400Color(props.type)};
  border-radius: 15px;

  @media (max-width: ${theme.size.mobile}px) {
    width: 100%;
    height: 60px;
  }

  &:hover {
    background-color: ${(props) => theme.colors.team[props.type]};
  }
`;

const Title = styled.div`
  padding: ${theme.padding.xlg}px;

  @media (max-width: ${theme.size.mobile}px) {
    padding: ${theme.padding.sm};

    position: relative;
    top: 50%;
    -ms-transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }
`;

const Description = styled.div`
  padding-left: ${theme.padding.xlg}px;

  @media (max-width: ${theme.size.mobile}px) {
    display: none;
  }
`;

const BottomNav = styled.button`
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
`;

export default TeamCard;
