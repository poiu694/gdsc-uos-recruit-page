import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Icon, theme, Typography } from '@gdsc-uos-recruit-page/design-system';
import { TeamKeyType } from '@gdsc-uos-recruit-page/design-system/@types/Team';
import { getTitleCaseTeam } from '@gdsc-uos-recruit-page/design-system/utils/colorUtils';
import { useGA } from '@gdsc-uos-recruit-page/hooks';
import { useRouter } from 'next/router';

import { TeamNameProps, QuestionListItem } from '../../../@types';

interface QuestionListProps extends TeamNameProps{
  questions: QuestionListItem[];
}

function QuestionList({ questions, teamName }: QuestionListProps) {
  const router = useRouter();
  const { logEvent } = useGA();

  const handleClickListItem = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    e.stopPropagation();
    const { dataset } = e.currentTarget;
    logEvent('Click(QuestionItem)', `${dataset.title} click`);
    router.push(dataset.url as string);
  };

  const handleClickDirectTeamLink = () => {
    router.push(`/introduction/${teamName}`);
  };

  return (
    <Wrapper>
      {questions.map((question) => (
        <ListItem
          key={question.title}
          data-title={question.title}
          data-url={question.url}
          onClick={handleClickListItem}
        >
          <Typography
            type='body3'
            color={theme.palette.gray200}
            className='question-mark'
          >
            Q
          </Typography>
          <Typography
            type='body3'
            color={theme.colors.text.general}
            className='title'
          >
            {question.title}
          </Typography>
          <Icon type='right' hoverAction={false} />
        </ListItem>
      ))}
      {teamName !== 'common' && (
        <DirectLink
          type='h6'
          teamName={teamName}
          onClick={handleClickDirectTeamLink}
        >
          {getTitleCaseTeam(teamName)} Team 으로 바로가기
        </DirectLink>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.ul`
  ${({ theme }) => css`
    width: 100%;
    margin-left: 12em;

    @media (max-width: ${theme.size.tabletL}px) {
      margin-left: 4em;
    }

    @media (max-width: ${theme.size.tabletS}px) {
      margin-left: 1em;
    }

    @media (max-width: ${theme.size.mobile}px) {
      margin-left: 0;

      svg {
        width: 16px;
      }
    }
  `}
`;

const ListItem = styled.li`
  ${({ theme }) => css`
    width: 100%;
    height: 2.5em;
    padding: ${theme.padding.sm}px;

    cursor: pointer;
    border-radius: 5px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    -webkit-transition: all 0.1s ease-in-out; /* Safari */
    transition: all 0.1s ease-in-out;

    &:hover {
      background-color: ${theme.colors.ui.hover};

      .body3 {
        color: ${theme.colors.primary.blue};
      }
    }

    .question-mark {
      flex-grow: 1;
    }

    .title {
      flex-grow: 20;

      @media (max-width: ${theme.size.mobile}px) {
        padding-left: ${theme.padding.md}px;
      }
    }
  `}
`;

const DirectLink = styled(Typography)<TeamNameProps>`
  ${({ theme, teamName }) => css`
    display: flex;
    padding: ${theme.padding.sm}px;
    margin-top: 32px;
    border-top: 1px solid ${theme.colors.ui.divider};
    cursor: pointer;
    -webkit-transition: all 0.1s ease-in-out; /* Safari */
    transition: all 0.1s ease-in-out;

    &:hover {
      color: ${theme.colors.team[teamName]};
    }
  `}
`;

export default QuestionList;
