import styled from '@emotion/styled';
import { ComponentPropsWithoutRef, CSSProperties, PropsWithChildren } from 'react';
import { theme } from '../theme';
import { XOR } from '../utils';

export enum ButtonHierarchy {
  Primary = 'Primary',
  Danger = 'Danger',
  Success = 'Success',
  DarkGray = 'DarkGray',
  Gray = 'Gray',
  Parent = 'Parent',
  Warning = 'Warning',
}

type FullWidthProps = ComponentPropsWithoutRef<'button'> & {
  hierarchy?: ButtonHierarchy;
  borderRadius?: number | string;
  disabled?: boolean;
  fullWidth?: boolean;
};

type WidthProps = ComponentPropsWithoutRef<'button'> & {
  hierarchy?: ButtonHierarchy;
  borderRadius?: number | string;
  disabled?: boolean;
  width?: CSSProperties['width'];
};

export function Button({
  width,
  children,
  disabled = false,
  hierarchy = ButtonHierarchy.Primary,
  fullWidth = false,
  borderRadius = 10,
  ...restProps
}: PropsWithChildren<XOR<WidthProps, FullWidthProps>>) {
  return (
    <Wrapper
      width={width}
      borderRadius={borderRadius}
      fullWidth={fullWidth}
      hierarchy={hierarchy}
      disabled={disabled}
      {...restProps}
    >
      {children}
    </Wrapper>
  );
}

type StyleProps = Pick<
  XOR<WidthProps, FullWidthProps>,
  'width' | 'disabled' | 'borderRadius' | 'fullWidth' | 'hierarchy'
>;

const ButtonColor = {
  [ButtonHierarchy.Primary]: theme.colors.primary.blue,
  [ButtonHierarchy.Danger]: theme.colors.primary.red,
  [ButtonHierarchy.Success]: theme.colors.primary.green,
  [ButtonHierarchy.DarkGray]: theme.palette.gray350,
  [ButtonHierarchy.Gray]: theme.palette.gray250,
  [ButtonHierarchy.Warning]: theme.colors.primary.yellow,
  [ButtonHierarchy.Parent]: 'transparent',
} as const;

const Wrapper = styled.button<StyleProps>`
  width: ${({ fullWidth, width }) => {
    if (fullWidth) {
      return '100%';
    }
    return typeof width === 'number' ? `${width}px` : width;
  }};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  border-radius: ${({ borderRadius }) =>
    typeof borderRadius === 'string' ? borderRadius : `${borderRadius}px`};
  transition: all 0.2s ease-in;

  background-color: ${({ hierarchy }) => {
    if (!hierarchy || !(hierarchy in ButtonColor)) {
      return 'transparent';
    }
    return ButtonColor[hierarchy];
  }};
  border: none;
  outline: none;

  &:disabled {
    background-color: ${theme.palette.gray200};
  }
`;
