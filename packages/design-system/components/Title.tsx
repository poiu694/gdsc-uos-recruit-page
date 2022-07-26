import styled from '@emotion/styled';
import { colors } from '../theme/colors';
import Typography from './Typography';

interface TitleProps {
  title: string;
  desc1: string;
  desc2: string;
  desc3?: string;
}

function Title({ title, desc1, desc2 }: TitleProps) {
  return (
    <Wrapper>
      <Typography type='h2' color={colors.text.bold}>
        {title}
      </Typography>
      <Typography type='h6' color={colors.text.general}>
        {desc1}
      </Typography>
      <Typography type='h6' color={colors.text.general}>
        {desc2}
      </Typography>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  word-break: keep-all;

  div:first-of-type {
    margin-bottom: 8px;
  }
`;

export default Title;
