import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { css, useTheme } from '@emotion/react';
import { Icon, Typography } from '@gdsc-uos/ui';

function PrevBox() {
  const theme = useTheme();
  const router = useRouter();

  return (
    <Wrapper onClick={() => router.back()}>
      <Icon type="left" hoverAction={false} />
      <Typography type="body4" color={theme.colors.text.general}>
        질문목록 바로가기
      </Typography>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 160px;
    padding: 4px;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: all 0.15s linear;

    @media (max-width: ${theme.size.mobile}px) {
      margin-bottom: 0;
    }

    svg {
      margin-top: 2px;
      margin-right: 8px;

      @media (max-width: ${theme.size.mobile}px) {
        width: 16px;
      }
    }

    &:hover {
      background-color: ${theme.colors.ui.hover};

      .body4 {
        color: ${theme.colors.text.bold};
      }
    }
  `}
`;

export default PrevBox;
