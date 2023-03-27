import styled from '@emotion/styled';
import { css, useTheme } from '@emotion/react';
import { Typography } from '@gdsc-uos/ui';

interface Props {
  label?: string;
  value: boolean;
  onClick: () => void;
}

function ToggleBox({ label, value, onClick }: Props) {
  const theme = useTheme();

  return (
    <Wrapper>
      {label && (
        <Typography type="body4" color={theme.colors.text.general}>
          {label}
        </Typography>
      )}
      <input type="checkbox" id="toggle" hidden />
      <ToggleSwitch htmlFor="toggle" className={value ? 'toggle' : ''} onClick={onClick}>
        <ToggleButton />
      </ToggleSwitch>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 16px;
`;

const ToggleSwitch = styled.label`
  ${({ theme }) => css`
    width: 64px;
    height: 24px;
    display: block;
    position: relative;
    border-radius: 2rem;
    background-color: ${theme.colors.background};
    border: 1px solid ${theme.colors.ui.border};
    cursor: pointer;
    transition: all 0.2s ease-in;

    &.toggle {
      background-color: ${theme.palette.red200};
      border: 1px solid ${theme.palette.red300};
    }

    &.toggle span {
      left: calc(100% - 20px);
    }
  `}
`;

const ToggleButton = styled.span`
  width: 16px;
  height: 16px;
  position: absolute;
  top: 50%;
  left: 4px;
  transform: translateY(-50%);
  border-radius: 50%;
  background: ${(props) => props.theme.colors.primary.red};
  transition: all 0.2s ease-in;
`;

export default ToggleBox;
