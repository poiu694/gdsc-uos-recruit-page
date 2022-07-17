import styled from '@emotion/styled';
import { theme, Typography } from '@gdsc-uos-recruit-page/design-system';

interface IntroductionProps {
  title: string;
  desc: string;
}

function Introduction({ title, desc }: IntroductionProps) {
  return (
    <ContentsWrapper>
      <Typography type='h1'>{title}</Typography>
      <Typography type='body2' color={theme.colors.text.general}>
        {desc}
      </Typography>
    </ContentsWrapper>
  );
}

const ContentsWrapper = styled.div`
  width: 80%;
  height: 100%;

  margin: 0 auto;

  .h1 {
    margin-bottom: 16px;
  }

  .body2 {
    margin-bottom: 48px;
  }
`;

export default Introduction;
