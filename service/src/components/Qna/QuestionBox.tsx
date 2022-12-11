import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Typography } from '@gdsc-uos-recruit-page/design-system';

import { QuestionListItem } from '../../../@types/question';
import PrevBox from './PrevBox';

interface Props {
  question: QuestionListItem;
}

function QuestionBox({ question }: Props) {
  return (
    <Wrapper>
      <PrevBox />
      <TitleWrapper type="h2">{question?.title}</TitleWrapper>
      <ContentWrapper type="body3">{question?.desc}</ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
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
