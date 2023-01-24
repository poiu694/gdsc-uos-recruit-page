import styled from '@emotion/styled';
import React, { PropsWithChildren } from 'react';

interface Props extends React.ComponentPropsWithoutRef<'td'> {}

export function Td({ children, ...restProps }: PropsWithChildren<Props>) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
}

const Wrapper = styled.td``;
