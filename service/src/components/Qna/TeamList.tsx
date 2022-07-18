import styled from '@emotion/styled';
import { theme, Typography } from '@gdsc-uos-recruit-page/design-system';
import { useCallback, useState } from 'react';

import { teams } from '../../constants';
import { CustomLink } from '../common';
import { TeamKeyType } from '../../../@types/team';
import { QuestionListItem } from '../../../@types/question';

interface TeamListProps {
  teamName?: TeamKeyType;
}

const initalIsActive = (teams: QuestionListItem[], teamName: TeamKeyType) => {
  return new Array(teams.length)
    .fill(false)
    .map((_, idx) => teamName === teams[idx].type);
};

function TeamList({ teamName }: TeamListProps) {
  const [isActive, setIsActive] = useState(initalIsActive(teams, teamName!));

  const handleClickTeamItem = useCallback(
    (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
      const { id: indexToUpdate } = e.currentTarget;
      const nextIsActive = new Array(teams.length).fill(false);
      nextIsActive[Number(indexToUpdate)] = true;
      setIsActive(nextIsActive);
    },
    []
  );

  return (
    <Wrapper>
      {teams.map((team, idx) => (
        <CustomLink key={team.title} href={team.url}>
          <ListItem id={`${idx}`} onClick={handleClickTeamItem}>
            <Typography
              type='body3'
              className={isActive[idx] ? 'bold' : ''}
              color={theme.palette.gray300}
            >
              {team.title}
            </Typography>
          </ListItem>
        </CustomLink>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.ul`
  width: 15rem;
  height: 100%;

  @media (max-width: ${theme.size.mobile}px) {
    width: 100%;
    margin: 40px 0;
    border: 1px solid ${theme.colors.ui.divider};
    border-radius: 5px;
  }
`;

const ListItem = styled.li`
  height: 32px;
  padding: ${theme.padding.md}px ${theme.padding.xlg}px ${theme.padding.md}px
    ${theme.padding.md}px;

  cursor: pointer;
  border-radius: 5px;

  display: flex;
  align-items: center;

  white-space: nowrap;

  -webkit-transition: all 0.1s ease-in-out; /* Safari */
  transition: all 0.1s ease-in-out;

  @media (max-width: ${theme.size.mobile}px) {
    .body3 {
      font-size: 18px;
    }
  }

  &:hover {
    background-color: ${theme.colors.ui.hover};

    .body3,
    .body3.bold {
      color: ${theme.colors.primary.blue};
    }
  }

  .body3.bold {
    color: ${theme.colors.text.bold};
    font-weight: 700;
  }
`;

export default TeamList;
