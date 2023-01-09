import styled from '@emotion/styled';

import { theme } from '../theme';
import Typography from './Typography';

interface Props extends React.ComponentPropsWithoutRef<'div'> {
  title: string;
  descriptions: string;
}

function Title({ title, descriptions, ...restProps }: Props) {
  const isArrayDescription = Array.isArray(descriptions);
  return (
    <Wrapper {...restProps}>
      <Typography type="h5" color={theme.palette.gray450}>
        {title}
      </Typography>
      <Description type="body4" color={theme.palette.gray450}>
        {descriptions}
      </Description>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const Description = styled(Typography)`
  white-space: pre-wrap;
`;

export default Title;
