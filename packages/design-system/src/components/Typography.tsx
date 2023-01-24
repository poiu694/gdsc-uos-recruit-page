import React, { PropsWithChildren, CSSProperties } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { theme } from '../theme';
import { FontKeyType } from '../theme/fonts';
import { colors, PalleteValueType } from '../theme/colors';

interface Props extends React.ComponentPropsWithoutRef<'div'> {
  type: FontKeyType;
  display?: CSSProperties['display'];
  textAlign?: CSSProperties['textAlign'];
  color?: PalleteValueType;
}

export function Typography({
  type,
  children,
  display = 'block',
  textAlign = 'start',
  color = colors.text.general,
  ...restProps
}: PropsWithChildren<Props>) {
  return (
    <Wrapper
      type={type}
      display={display}
      textAlign={textAlign}
      color={color}
      {...restProps}
    >
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div<Props>`
  ${(props) => css`
    ${theme.fonts.desktop[props.type]};
    text-align: ${props.textAlign};
    display: ${props.display};
    color: ${props.color};
  `}

  @media (max-width: ${theme.size.mobile}px) {
    ${(props) => theme.fonts.mobile[props.type]};
  }
`;
