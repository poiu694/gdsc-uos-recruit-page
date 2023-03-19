import { css, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Typography } from '@gdsc-uos/ui';

import PrevBox from './PrevBox';
import { QuestionListItem } from '@types';

interface Props {
  question: QuestionListItem;
}

function QuestionBox({ question }: Props) {
  const theme = useTheme();

  return (
    <Wrapper>
      <PrevBox />
      <TitleWrapper type="h2" color={theme.colors.text.bold}>
        {question?.title}
      </TitleWrapper>
      <ContentWrapper type="body3" color={theme.colors.text.general}>
        {question?.desc}
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;

    @media (max-width: ${theme.size.mobile}px) {
      svg {
        width: 16px;
      }
    }
  `}
`;

const TitleWrapper = styled(Typography)`
  ${({ theme }) => css`
    padding-bottom: ${theme.padding.md}px;
    border-bottom: 1px solid ${theme.colors.ui.divider};
  `}
`;

const ContentWrapper = styled(Typography)`
  ${({ theme }) => css`
    margin-top: ${theme.padding.md}px;
    white-space: pre-line;

    @media (max-width: ${theme.size.mobile}px) {
      margin-bottom: ${theme.padding.xlg}px;
    }
  `}
`;

export default QuestionBox;
