import styled from '@emotion/styled';
import React from 'react';

import { TeamValueType } from '../@types/Team';
import { theme } from '../theme';
import { getJobByTeam, getPrimaryColor } from '../utils/colorUtils';
import Typography from './Typography';

interface TeamCard {
  type: TeamValueType;
  handleClickNav: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

function TeamCard({ type = 'Frontend', handleClickNav }: TeamCard) {
  const teamJob = getJobByTeam(type).split(' '); // [0]: Team, [1]: Developer
  const primaryColor = getPrimaryColor(type);

  return (
    <Wrapper>
      <Title>
        <Typography type='h4' color={primaryColor}>
          {type}
        </Typography>
      </Title>

      <Description>
        <Typography type='h6' color={theme.colors.primary.white}>
          {teamJob[0]}
        </Typography>
        <Typography type='h6' color={theme.colors.primary.white}>
          {teamJob[1]}
        </Typography>
      </Description>

      <BottomNav onClick={handleClickNav}>
        <Typography type='h4' textAlign='center' color={primaryColor}>
          Detail
        </Typography>
      </BottomNav>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 260px;
  height: 300px;
  position: relative;
  background-color: ${theme.palette.gray500};
  border-radius: 15px;

  @media (max-width: ${theme.size.mobile}px) {
    width: 100%;
    height: 60px;
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

  background-color: ${theme.palette.gray400};

  border: none;
  outline: none;
  border-radius: 0px 0px 15px 15px;

  @media (max-width: ${theme.size.mobile}px) {
    width: 30%;
    height: 100%;
    right: 0;

    border-radius: 0px 15px 15px 0;
  }
`;

export default TeamCard;
