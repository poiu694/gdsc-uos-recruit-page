import styled from '@emotion/styled';
import React, { PropsWithChildren } from 'react';
import { theme } from '../../theme';

interface Props extends React.ComponentPropsWithoutRef<'tbody'> {}

function TBody({ children, ...restProps }: PropsWithChildren<Props>) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
}

const Wrapper = styled.tbody`
  & > tr {
    cursor: pointer;
    transition: all 0.1s linear;
  }

  & > tr:nth-of-type(n + 1)::after {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    width: 100%;
    height: 1px;
    background-image: linear-gradient(
      ${theme.colors.primary.white},
      ${theme.colors.ui.divider},
      ${theme.colors.primary.white}
    );
  }

  & > tr:hover {
    background-color: ${theme.palette.gray100};
  }
`;

export default TBody;
