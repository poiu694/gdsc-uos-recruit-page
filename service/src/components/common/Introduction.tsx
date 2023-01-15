import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Typography } from 'gdsc-uos-design-system';

interface Props extends React.ComponentPropsWithoutRef<'div'> {
  title: string;
  desc: string;
}

function Introduction({ title, desc, ...restProps }: Props) {
  return (
    <ContentsWrapper {...restProps}>
      <Typography type="h1">{title}</Typography>
      <Typography type="body3">{desc}</Typography>
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
