import styled from '@emotion/styled';
import React, { PropsWithChildren } from 'react';

interface Props extends React.ComponentPropsWithoutRef<'thead'> {}

export function THead({ children, ...restProps }: PropsWithChildren<Props>) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
}

const Wrapper = styled.thead`
  position: relative;

  & > tr td {
    font-weight: 700;
  }

  & > tr:hover {
    background-color: transparent;
  }
`;
