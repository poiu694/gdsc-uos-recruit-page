import styled from '@emotion/styled';
import { theme, Typography } from '@gdsc-uos-recruit-page/design-system';

import { QuestionListItem } from '../../../@types/question';
import PrevBox from './PrevBox';

interface QuestionBoxProps {
  question: QuestionListItem;
}

function QuestionBox({ question }: QuestionBoxProps) {
  return (
    <Wrapper>
      <PrevBox />
      <TitleWrapper>
        <Typography type='h3'>{question?.title}</Typography>
      </TitleWrapper>
      <ContentWrapper>
        <Typography type='body3' color={theme.colors.text.general}>
          {question?.desc}
        </Typography>
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
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
`;

const TitleWrapper = styled.div`
  padding-bottom: ${theme.padding.md}px;

  border-bottom: 1px solid ${theme.colors.ui.divider};
`;

const ContentWrapper = styled.div`
  margin-top: ${theme.padding.md}px;

  @media (max-width: ${theme.size.mobile}px) {
    margin-bottom: ${theme.padding.xlg}px;
  }
`;

export default QuestionBox;
