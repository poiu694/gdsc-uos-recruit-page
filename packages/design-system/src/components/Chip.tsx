import styled from '@emotion/styled';

import { theme } from '../theme';
import { Typography } from './Typography';
import { PalleteValueType } from '../theme/colors';

export type ChipType = 'default' | 'success' | 'danger' | 'primary' | 'warning';

interface Props {
  type: ChipType;
  label: string;
  variants: 'outlined' | 'filled' | 'icon';
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export function Chip({ type, variants, label, onClick, ...restProps }: Props) {
  return (
    <Wrapper type={type} variants={variants} onClick={onClick} {...restProps}>
      <Typography type="body5" textAlign="center">
        {label}
      </Typography>
    </Wrapper>
  );
}

type StyleProps = Pick<Props, 'type' | 'variants'>;

const ChipColor = {
  default: {
    filled: theme.palette.gray300,
    outlined: theme.palette.gray300,
    filledColor: theme.colors.primary.white,
    outlinedColor: theme.colors.primary.black,
  },
  danger: {
    filled: theme.palette.red500,
    outlined: theme.palette.red500,
    filledColor: theme.colors.primary.white,
    outlinedColor: theme.colors.primary.red,
  },
  success: {
    filled: theme.palette.green500,
    outlined: theme.palette.green500,
    filledColor: theme.colors.primary.white,
    outlinedColor: theme.colors.primary.green,
  },
  primary: {
    filled: theme.palette.blue500,
    outlined: theme.palette.blue500,
    filledColor: theme.colors.primary.white,
    outlinedColor: theme.colors.primary.blue,
  },
  warning: {
    filled: theme.palette.yellow500,
    outlined: theme.palette.yellow400,
    filledColor: theme.palette.gray400,
    outlinedColor: theme.colors.primary.yellow,
  },
} as Record<
  ChipType,
  Record<
    'outlined' | 'filled' | 'filledColor' | 'outlinedColor',
    PalleteValueType
  >
>;
const Wrapper = styled.div<StyleProps>`
  max-width: 100px;
  max-height: 20px;
  background-color: ${({ variants, type }) => {
    if (variants === 'filled' && type in ChipColor)
      return ChipColor[type][variants];
    return 'transparent';
  }};
  border: ${({ variants, type }) => {
    if (variants === 'outlined' && type in ChipColor)
      return `1px solid ${ChipColor[type][variants]}`;
    return 'none';
  }};
  padding: 4px 20px;
  border-radius: 16px;
  & > div {
    color: ${({ variants, type }) => {
      if (variants === 'filled' && type in ChipColor)
        return ChipColor[type]['filledColor'];
      if (variants === 'outlined' && type in ChipColor)
        return ChipColor[type]['outlinedColor'];
      return 'transparent';
    }};
  }
`;
