import React, { PropsWithChildren, CSSProperties } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { FontKeyType } from '../theme/fonts';
import { colors, PalleteValueType } from '../theme/colors';
import { theme } from '../theme';

interface Props extends React.ComponentPropsWithoutRef<'div'> {
  type: FontKeyType;
  className?: string;
  display?: CSSProperties['display'];
  textAlign?: CSSProperties['textAlign'];
  color?: PalleteValueType;
}

function Typography({
  type,
  className,
  children,
  display = 'block',
  textAlign = 'start',
  color = colors.text.general,
  ...restProps
}: PropsWithChildren<Props>) {
  return (
    <Wrapper
      type={type}
      className={`${type} ${className}`}
      display={display}
      textAlign={textAlign}
      color={color}
      {...restProps}
    >
      {children}
    </Wrapper>
  );
}

// TODO: 글자에 따른 모바일 반응형 디자인시스템 만들어 놓기
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

export default Typography;
