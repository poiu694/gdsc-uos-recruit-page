import styled from '@emotion/styled';
import {
  TEAM_LIST,
  theme,
  Typography,
  TeamKeyType,
  getTitleCaseTeam,
} from 'gdsc-uos-design-system';

interface Props {
  activeTeam: TeamKeyType;
  onClickTeamName: (teamName: TeamKeyType) => void;
}

function TeamList({ activeTeam, onClickTeamName }: Props) {
  return (
    <Wrapper>
      <TeamListWrapper>
        <Typography type="h5">팀 리스트</Typography>
        {Object.values(TEAM_LIST).map((team) => (
          <ListItem key={team} onClick={() => onClickTeamName(team)}>
            <Typography
              type={activeTeam === team ? 'h6' : 'body3'}
              color={
                activeTeam === team
                  ? theme.colors.primary.blue
                  : theme.palette.gray350
              }
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
`;

export default TeamList;
