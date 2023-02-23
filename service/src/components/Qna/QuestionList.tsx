import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';

import { Icon, theme, Typography, getTitleCaseTeam } from 'gdsc-uos-design-system';

import { useGA } from '../../hooks';
import { TeamNameProps, QuestionListItem } from '../../../@types';

interface Props extends TeamNameProps {
  questions: QuestionListItem[];
}

function QuestionList({ questions, teamName }: Props) {
  const router = useRouter();
  const { logEvent } = useGA();

  const handleClickListItem = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    e.stopPropagation();
    const { dataset } = e.currentTarget;
    logEvent('Question', `${dataset.title} click`);
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
          <Typography type="body3" color={theme.palette.gray350} className="question-mark">
            Q
          </Typography>
          <Typography type="body3" color={theme.colors.text.general} className="title">
            {question.title}
          </Typography>
          <Icon type="right" hoverAction={false} className="right" />
        </ListItem>
      ))}
      {teamName !== 'common' && (
        <DirectLink type="h6" teamName={teamName} onClick={handleClickDirectTeamLink}>
          {getTitleCaseTeam(teamName)} Team 으로 바로가기
        </DirectLink>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.ul`
  ${({ theme }) => css`
    width: 100%;

    @media (max-width: ${theme.size.mobile}px) {
      svg {
        width: 16px;
      }
    }
  `}
`;

const ListItem = styled.li`
  ${({ theme }) => css`
    width: 100%;
    height: 48px;
    padding: ${theme.padding.sm}px;
    cursor: pointer;
    border-radius: 5px;
    display: flex;
    align-items: center;
    -webkit-transition: all 0.1s ease-in-out; /* Safari */
    transition: all 0.1s ease-in-out;

    &:hover {
      background-color: ${theme.colors.ui.hover};

      & > div {
        color: ${theme.colors.primary.blue};
      }
    }

    .title {
      margin-left: 30px;

      @media (max-width: ${theme.size.mobile}px) {
        margin-left: 0px;
        padding-left: ${theme.padding.md}px;
      }
    }
    @media (max-width: ${theme.size.mobile}px) {
      height: 28px;
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
