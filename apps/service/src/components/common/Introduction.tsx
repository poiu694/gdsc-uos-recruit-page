import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Typography } from '@gdsc-uos/ui';

interface Props extends React.ComponentPropsWithoutRef<'div'> {
  title: string;
  desc: string;
}

function Introduction({ title, desc, ...restProps }: Props) {
  const theme = useTheme();

  return (
    <ContentsWrapper {...restProps}>
      <Typography type="h1" color={theme.colors.text.bold}>
        {title}
      </Typography>
      <Typography type="body3" color={theme.colors.text.general}>
        {desc}
      </Typography>
    </ContentsWrapper>
  );
}

const ContentsWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  word-break: keep-all;
`;

export default Introduction;
