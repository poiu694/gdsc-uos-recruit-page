import styled from '@emotion/styled';
import React, { PropsWithChildren } from 'react';
import { theme } from '../../theme';

interface Props extends React.ComponentPropsWithoutRef<'thead'> {}

function THead({ children, ...restProps }: PropsWithChildren<Props>) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
}

const Wrapper = styled.thead`
  position: relative;

  & > tr td {
    cursor: default;
    font-weight: 700;
  }

  & > tr:hover {
    background-color: transparent;
  }
`;

export default THead;
