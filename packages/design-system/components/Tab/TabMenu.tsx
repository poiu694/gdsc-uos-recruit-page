import styled from '@emotion/styled';
import { theme } from '../../theme';
import Button, { ButtonHierarchy } from '../Button';
import Typography from '../Typography';
import { useTabContext } from './TabContext';

interface Props {
  label: string;
  value: string;
}

function TabMenu({ label, value }: Props) {
  const { value: currentTabValue, onClickTabMenu } = useTabContext();
  const isActiveNow = value === currentTabValue;

  return (
    <Wrapper
      data-value={value}
      hierarchy={ButtonHierarchy.Parent}
      className={isActiveNow ? 'active' : ''}
      onClick={onClickTabMenu}
    >
      <Typography
        type="h6"
        style={{ display: 'inline' }}
        color={
          isActiveNow ? theme.colors.primary.blue : theme.colors.text.general
        }
      >
        {label}
      </Typography>
    </Wrapper>
  );
}

const Wrapper = styled(Button)`
  display: inline-block;
  padding: 2px 10px;
  border-radius: 4px 4px 0 0;
  cursor: pointer;
  transition: background-color 0.15s linear;
  border-bottom: 1px solid ${theme.colors.ui.border};

  &:hover {
    background-color: ${theme.colors.ui.hover};
  }

  &.active {
    color: ${theme.colors.primary.blue};
    border-color: ${theme.colors.primary.blue};
  }
`;

export default TabMenu;
