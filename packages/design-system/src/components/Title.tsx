import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Theme } from '../theme';

import { Typography } from './Typography';

interface Props extends React.ComponentPropsWithoutRef<'div'> {
  title: string;
  descriptions: string;
}

export function Title({ title, descriptions, ...restProps }: Props) {
  const theme = useTheme() as Theme;

  return (
    <Wrapper {...restProps}>
      <Typography type="h5" color={theme.colors.text.bold}>
        {title}
      </Typography>
      <Description type="body4" color={theme.colors.text.general}>
        {descriptions}
      </Description>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const Description = styled(Typography)`
  white-space: pre-wrap;
`;
