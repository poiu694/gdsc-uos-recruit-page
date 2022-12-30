import styled from '@emotion/styled';
import { Icon, theme, Typography } from '@gdsc-uos-recruit-page/design-system';
import { IconKeyType } from '@gdsc-uos-recruit-page/design-system/components/Icon';
import { PalleteValueType } from '@gdsc-uos-recruit-page/design-system/theme/colors';

interface Props {
  label: string;
  value: string;
  description: string;
  iconType: IconKeyType;
  iconOutFilledColor: PalleteValueType;
}

function SummaryCard({
  description,
  value,
  label,
  iconType,
  iconOutFilledColor,
}: Props) {
  return (
    <Wrapper>
      <CardHeader>
        <OutFilledIcon
          type={iconType}
          iconOutFilledColor={iconOutFilledColor}
        />
        <Typography type="body4" color={theme.palette.gray200} textAlign="end">
          {label}
        </Typography>
        <Typography
          type="h5"
          color={theme.palette.gray300}
          textAlign="end"
          style={{ marginBottom: 8 }}
        >
          {value}
        </Typography>
      </CardHeader>
      <CardFoorter>
        <Typography type="body5" color={theme.palette.gray300}>
          {description}
        </Typography>
      </CardFoorter>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  border-radius: 16px;
  box-shadow: 0 4px 6px -1px ${theme.palette.gray100},
    0 2px 4px -1px ${theme.palette.gray50};
`;

const CardHeader = styled.header`
  position: relative;
  padding: 16px;
  box-sizing: border-box;

  &::after {
    position: absolute;
    content: '';
    width: 90%;
    height: 1px;
    background-image: linear-gradient(
      to right,
      ${theme.colors.primary.white},
      ${theme.colors.ui.divider},
      ${theme.colors.primary.white}
    );
  }
`;

type OutFilledColor = Pick<Props, 'iconOutFilledColor'>;
const OutFilledIcon = styled(Icon)<OutFilledColor>`
  position: absolute;
  top: -50%;
  background-color: ${(props) => props.iconOutFilledColor};
  transform: translateY(50%);
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 20px 0 ${theme.palette.gray100},
    0 7px 10px -5px ${theme.palette.gray50};

  path {
    stroke: ${theme.colors.primary.white};
  }
`;

const CardFoorter = styled.footer`
  padding: 0 0 16px 16px;
  box-sizing: border-box;
`;

export default SummaryCard;