import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import { TeamKeyType, Typography } from 'gdsc-uos-design-system';

import { useGA } from '@/hooks';
import { teams } from '@/constants';
import { TeamNameProps, QuestionListItem } from '@types';
import { css, useTheme } from '@emotion/react';

const initalIsActive = (teams: QuestionListItem[], teamName: TeamKeyType) => {
  return new Array(teams.length).fill(false).map((_, idx) => teamName === teams[idx].type);
};

function TeamList({ teamName }: TeamNameProps) {
  const theme = useTheme();
  const router = useRouter();
  const { logEvent } = useGA();
  const [isActive, setIsActive] = useState(initalIsActive(teams, teamName!));

  const handleClickTeamItem = useCallback(
    (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
      const { id: indexToUpdate, dataset } = e.currentTarget;
      const nextIsActive = new Array(teams.length).fill(false);
      nextIsActive[Number(indexToUpdate)] = true;
      setIsActive(nextIsActive);
      logEvent('Question', `${dataset.title} click`);
      router.push(dataset.url as string);
    },
    [logEvent, router]
  );

  return (
    <Wrapper>
      {teams.map((team, idx) => (
        <ListItem
          id={`${idx}`}
          onClick={handleClickTeamItem}
          key={team.title}
          data-team={team.title}
          data-url={team.url}
        >
          <Typography
            type="body2"
            className={isActive[idx] ? 'bold' : ''}
            color={theme.palette.gray350}
          >
            {team.title}
          </Typography>
        </ListItem>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.ul`
  ${({ theme }) => css`
    width: 168px;
    height: 100%;

    @media (max-width: ${theme.size.mobile}px) {
      width: 100%;
      margin: 40px 0;
      border: 1px solid ${theme.colors.ui.divider};
      border-radius: 5px;
    }
  `}
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
    white-space: nowrap;
    -webkit-transition: all 0.1s ease-in-out; /* Safari */
    transition: all 0.1s ease-in-out;

    &:hover {
      background-color: ${theme.colors.ui.hover};

      & > div {
        color: ${theme.colors.primary.blue};
      }
    }

    & > div.bold {
      color: ${theme.colors.text.bold};
      font-weight: 700;
    }

    @media (max-width: ${theme.size.mobile}px) {
      height: 22px;
    }
  `}
`;

export default TeamList;
