import styled from '@emotion/styled';
import { Typography } from 'gdsc-uos-design-system';

interface Props extends React.ComponentPropsWithoutRef<'div'> {
  title: string;
  desc: string;
}

function Introduction({ title, desc, ...restProps }: Props) {
  return (
    <ContentsWrapper {...restProps}>
      <Typography type="h1">{title}</Typography>
      <Typography type="body3">{desc}</Typography>
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
