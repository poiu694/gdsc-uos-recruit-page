import styled from '@emotion/styled';
import { Icon, theme, Typography } from '@gdsc-uos-recruit-page/design-system';
import { useRouter } from 'next/router';

function PrevBox() {
  const router = useRouter();

  return (
    <Wrapper onClick={() => router.back()}>
      <Icon type='left' hoverAction={false} />
      <Typography type='body4' color={theme.palette.gray300}>
        질문목록 바로가기
      </Typography>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 10em;
  padding: 4px;
  margin-bottom: 12px;

  display: flex;
  align-items: center;

  cursor: pointer;

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
`;

export default PrevBox;
