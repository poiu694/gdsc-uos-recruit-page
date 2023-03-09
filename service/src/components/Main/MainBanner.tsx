import styled from '@emotion/styled';
import { css, useTheme } from '@emotion/react';
import { Planet, Typography } from 'gdsc-uos-design-system';

interface Props {
  banner: string;
}

function MainBanner({ banner }: Props) {
  const theme = useTheme();

  return (
    <Wrapper>
      <ContentsWrapper>
        <TitleWrapper>
          <Typography type="h1" color={theme.colors.primary.red}>
            Google
          </Typography>
          <Typography type="h1" color={theme.colors.primary.yellow}>
            Developer
          </Typography>
          <Typography type="h1" color={theme.colors.primary.green}>
            Student
          </Typography>
          <Typography type="h1" color={theme.colors.primary.blue}>
            Clubs
          </Typography>
        </TitleWrapper>
        <Typography type="h2" color={theme.colors?.text.bold}>
          University of Seoul
        </Typography>
        <DescWrapper type="h6" color={theme.colors?.text.general}>
          {banner}
        </DescWrapper>
      </ContentsWrapper>
      <Planet />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
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

const DescWrapper = styled(Typography)`
  margin-top: 16px;
`;

export default MainBanner;
