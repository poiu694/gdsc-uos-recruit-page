import React, { PropsWithChildren } from 'react';
import styled from '@emotion/styled';

import { theme } from '../../theme';

interface Props extends React.ComponentPropsWithoutRef<'table'> {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'simple' | 'striped';
}

export function Table({
  size = 'md',
  variant = 'simple',
  children,
  ...restProps
}: PropsWithChildren<Props>) {
  return (
    <Wrapper {...restProps}>
      <TableContainer>
        <TableWrapper size={size} className={`${variant}`}>
          {children}
        </TableWrapper>
      </TableContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: 1px solid ${theme.colors.ui.divider};
  border-radius: 12px;
  overflow-x: auto;
  padding: 8px;
  box-sizing: border-box;
`;

const TableContainer = styled.div`
  display: block;
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  max-width: 100%;
`;

type StyleProps = Pick<Props, 'size'>;
const TableWrapper = styled.table<Required<StyleProps>>`
  width: 100%;

  td {
    padding: ${({ size }) => theme.padding[size]}px;
  }

  &.striped tbody tr:nth-of-type(odd) {
    background-color: ${theme.palette.gray100};
  }

  &.striped tbody tr:hover {
    background-color: ${theme.palette.gray200};
  }
`;
