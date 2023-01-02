import styled from '@emotion/styled';

import { theme } from '../theme';
import Typography from './Typography';

interface Props extends React.ComponentPropsWithoutRef<'div'> {
  title: string;
  descriptions: string | string[];
}

function Title({ title, descriptions, ...restProps }: Props) {
  const isArrayDescription = Array.isArray(descriptions);
  return (
    <Wrapper {...restProps}>
      <Typography type="h5" color={theme.palette.gray450}>
        {title}
      </Typography>
      {isArrayDescription &&
        descriptions.map((description) => (
          <Typography type="body4" color={theme.palette.gray450}>
            {description}
          </Typography>
        ))}
      {!isArrayDescription && (
        <Typography type="body4" color={theme.palette.gray450}>
          {descriptions}
        </Typography>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div``;

export default Title;
