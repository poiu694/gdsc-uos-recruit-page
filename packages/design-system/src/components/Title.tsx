import styled from '@emotion/styled';

import { Typography } from './Typography';
import { darkTheme, theme } from '../theme';

interface Props extends React.ComponentPropsWithoutRef<'div'> {
  title: string;
  descriptions: string;
  isDark?: boolean;
}

export function Title({ title, descriptions, isDark = true, ...restProps }: Props) {
  return (
    <Wrapper {...restProps}>
      <Typography type="h5" color={isDark ? darkTheme.text.bold : theme.colors.text.bold}>
        {title}
      </Typography>
      <Description type="body4" color={isDark ? darkTheme.text.general : theme.colors.text.general}>
        {descriptions}
      </Description>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const Description = styled(Typography)`
  white-space: pre-wrap;
`;
