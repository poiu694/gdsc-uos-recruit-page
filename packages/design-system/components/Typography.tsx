import { PropsWithChildren, CSSProperties } from 'react';
import styled from '@emotion/styled';
import { FontKeyType } from '../theme/fonts';
import { colors, PalleteValueType } from '../theme/colors';
import { theme } from '../theme';
import { css } from '@emotion/react';

interface TypographyProps {
  type: FontKeyType;
  display?: CSSProperties['display'];
  textAlign?: CSSProperties['textAlign'];
  color?: PalleteValueType;
}

interface TypographyPropsWithChildren
  extends PropsWithChildren<TypographyProps> {}

function Typography({
  type,
  children,
  display = 'block',
  textAlign = 'start',
  color = colors.text.general,
}: TypographyPropsWithChildren) {
  return (
    <Wrapper
      type={type}
      className={type}
      display={display}
      textAlign={textAlign}
      color={color}
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
  }
`;

export default Typography;
