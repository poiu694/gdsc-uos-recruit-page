import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { theme, Typography } from '@gdsc-uos-recruit-page/design-system';

interface IntroductionProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  desc: string;
}

function Introduction({ title, desc, ...restProps }: IntroductionProps) {
  return (
    <ContentsWrapper {...restProps}>
      <Typography type='h1'>{title}</Typography>
      <Typography type='body3' color={theme.colors.text.general}>
        {desc}
      </Typography>
    </ContentsWrapper>
  );
}

const ContentsWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;

    margin: 0 auto;
    word-break: keep-all;

    .h1 {
      margin-bottom: 16px;
    }

    .body3 {
      margin-bottom: 48px;
    }

    @media (max-width: ${theme.size.mobile}px) {
      .body3 {
        margin-bottom: 16px;
      }
    }
  `}
`;

export default Introduction;
