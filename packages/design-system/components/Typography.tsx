import React, { PropsWithChildren, CSSProperties } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { FontKeyType } from '../theme/fonts';
import { colors, PalleteValueType } from '../theme/colors';
import { theme } from '../theme';

interface TypographyProps extends React.HTMLAttributes<HTMLDivElement> {
  type: FontKeyType;
  className?: string;
  display?: CSSProperties['display'];
  textAlign?: CSSProperties['textAlign'];
  color?: PalleteValueType;
}

interface TypographyPropsWithChildren
  extends PropsWithChildren<TypographyProps> {}

function Typography({
  type,
  className,
  children,
  display = 'block',
  textAlign = 'start',
  color = colors.text.general,
  ...restProps
}: TypographyPropsWithChildren) {
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
const Wrapper = styled.div<TypographyProps>`
  ${(props) => {
    return css`
      ${theme.fonts[props.type]};
      text-align: ${props.textAlign};
      display: ${props.display};
      color: ${props.color};
    `;
  }}
  @media (max-width: ${theme.size.mobile}px) {
    &.h1 {
      ${theme.fonts.h4}
    }

    &.h2 {
      ${theme.fonts.h5}
    }

    &.h3 {
      ${theme.fonts.h6}
    }

    &.h4 {
      font-size: 24px;
    }

    &.h5 {
      font-size: 16px;
    }

    &.h6 {
      font-size: 12px;
    }

    &.body2 {
      font-size: 16px;
    }

    &.body3 {
      font-size: 14px;
    }

    &.body4 {
      font-size: 8px;
    }
  }
`;

export default Typography;
