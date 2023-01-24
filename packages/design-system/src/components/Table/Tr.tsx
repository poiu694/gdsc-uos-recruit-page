import styled from '@emotion/styled';
import React, { PropsWithChildren } from 'react';

interface Props extends React.ComponentPropsWithoutRef<'tr'> {}

export function Tr({ children, ...restProps }: PropsWithChildren<Props>) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
}

const Wrapper = styled.tr`
  position: relative;
`;
