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
    <Wrapper type={type} display={display} textAlign={textAlign} color={color}>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div<TypographyProps>`
  ${(props) => {
    return css`
      ${theme.fonts[props.type]};
      text-align: ${props.textAlign};
      display: ${props.display};
      color: ${props.color};
    `;
  }}
`;

export default Typography;
