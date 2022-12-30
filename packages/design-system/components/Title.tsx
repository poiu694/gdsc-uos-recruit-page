import styled from '@emotion/styled';

import { theme } from '../theme';
import Typography from './Typography';

interface Props extends React.ComponentPropsWithoutRef<'div'> {
  title: string;
  description: string;
}

function Title({ title, description, ...restProps }: Props) {
  return (
    <Wrapper {...restProps}>
      <Typography type="h5" color={theme.palette.gray400}>
        {title}
      </Typography>
      <Typography type="body4" color={theme.palette.gray300}>
        {description}
      </Typography>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

export default Title;
