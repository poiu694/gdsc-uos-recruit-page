import styled from '@emotion/styled';
import React, { PropsWithChildren } from 'react';
import { theme } from '../../theme';

interface Props extends React.ComponentPropsWithoutRef<'tr'> {}

function Tr({ children, ...restProps }: PropsWithChildren<Props>) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
}

const Wrapper = styled.tr`
  position: relative;
`;

export default Tr;