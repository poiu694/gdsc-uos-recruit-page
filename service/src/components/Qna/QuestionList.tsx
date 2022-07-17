import styled from '@emotion/styled';
import { Icon, theme, Typography } from '@gdsc-uos-recruit-page/design-system';
import { QuestionListItem } from '../../../@types/question';
import { CustomLink } from '../common';

interface QuestionListProps {
  questions: QuestionListItem[];
}

function QuestionList({ questions }: QuestionListProps) {
  return (
    <Wrapper>
      {questions.map((question) => (
        <CustomLink href={question.url}>
          <ListItem key={question.title}>
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
        </CustomLink>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.ul`
  width: 100%;
  margin-left: 12em;

  @media (max-width: ${theme.size.mobile}px) {
    margin-left: 0;
  }
`;

const ListItem = styled.li`
  width: 100%;
  height: 2.5em;
  padding: ${theme.padding.sm}px ${theme.padding.sm}px ${theme.padding.sm}px
    ${theme.padding.sm}px;

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
`;

export default QuestionList;
