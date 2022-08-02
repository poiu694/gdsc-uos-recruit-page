import { css } from '@emotion/react';
import styled from '@emotion/styled';
import {
  Planet,
  theme,
  Typography,
} from '@gdsc-uos-recruit-page/design-system';

interface MainBannerProps {
  banner: string;
}

function MainBanner({ banner }: MainBannerProps) {
  return (
    <Wrapper>
      <ContentsWrapper>
        <TitleWrapper>
          <Typography type='h1' color={theme.colors.primary.red}>
            Google
          </Typography>
          <Typography type='h1' color={theme.colors.primary.yellow}>
            Developer
          </Typography>
          <Typography type='h1' color={theme.colors.primary.green}>
            Student
          </Typography>
          <Typography type='h1' color={theme.colors.primary.blue}>
            Club
          </Typography>
        </TitleWrapper>
        <Typography type='h2'>University of Seoul</Typography>
        <DescWrapper>
          <Typography type='h6'>{banner}</Typography>
        </DescWrapper>
      </ContentsWrapper>
      <Planet />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 80%;
    min-height: 100vh;
    position: relative;
    margin: 60px auto;

    @media (max-width: ${theme.size.mobile}px) {
      margin: 60px 60px 0 auto;
    }
  `}
`;

const ContentsWrapper = styled.div`
  ${({ theme }) => css`
    position: absolute;
    left: 0%;
    bottom: 15%;

    z-index: ${theme.zIndex.body};
  `}
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 12px;
`;

const DescWrapper = styled.div`
  margin-top: 16px;
`;

export default MainBanner;
