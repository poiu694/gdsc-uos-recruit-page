import React from 'react';
import { css, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Typography, TeamKeyType, getTitleCaseTeam, BASIC_TEAM } from 'gdsc-uos-design-system';

interface Props {
  activeTeam: TeamKeyType;
  isCommonNeed?: boolean;
  isCoreNeed?: boolean;
  onClickTeamName: (teamName: TeamKeyType) => void;
}

function TeamList({
  activeTeam,
  isCoreNeed = false,
  isCommonNeed = false,
  onClickTeamName,
}: Props) {
  const theme = useTheme();
  const teamList = [
    (isCommonNeed ? 'common' : null) as TeamKeyType,
    ...Object.values(BASIC_TEAM),
    (isCoreNeed ? 'core' : null) as TeamKeyType,
  ].filter((team) => team);

  const handleClickTeamName = React.useCallback((team: TeamKeyType) => {
    onClickTeamName(team);
  }, []);

  return (
    <Wrapper>
      <TeamListWrapper>
        <Typography type="h5">팀 리스트</Typography>
        {teamList.map((team) => (
          <ListItem key={team} onClick={() => handleClickTeamName(team)}>
            <Typography
              type={activeTeam === team ? 'h6' : 'body3'}
              color={activeTeam === team ? theme.colors.primary.blue : theme.palette.gray350}
            >
              {getTitleCaseTeam(team)}
            </Typography>
          </ListItem>
        ))}
      </TeamListWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const TeamListWrapper = styled.ul`
  width: 15rem;
  height: 100%;
`;

const ListItem = styled.li`
  ${({ theme }) => css`
    height: 32px;
    padding: ${theme.padding.md}px ${theme.padding.xlg}px ${theme.padding.md}px
      ${theme.padding.md}px;
    cursor: pointer;
    border-radius: 5px;
    display: flex;
    align-items: center;
    transition: all 0.1s ease-in-out;

    &:hover {
      background-color: ${theme.colors.ui.hover};
    }
  `}
`;

export default React.memo(TeamList);
