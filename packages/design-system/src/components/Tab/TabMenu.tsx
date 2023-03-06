import React from 'react';
import styled from '@emotion/styled';

import { Chip } from '../Chip';
import { theme } from '../../theme';
import { Typography } from '../Typography';
import { useTabContext } from './TabContext';
import { Button, ButtonHierarchy } from '../Button';

interface Props {
  label: string;
  value: string;
}

export const TabMenu = React.memo(function TabMenu({ label, value, ...restProps }: Props) {
  const { value: currentTabValue, variant, onClickTabMenu } = useTabContext();
  const isActiveNow = value === currentTabValue;

  const handleClickTabMenu = React.useCallback((value: string) => {
    onClickTabMenu(value);
  }, []);

  return (
    <Wrapper
      hierarchy={ButtonHierarchy.Parent}
      className={isActiveNow ? `active ${variant}` : `${variant}`}
      onClick={() => handleClickTabMenu(value)}
      {...restProps}
    >
      {variant === 'default' && (
        <Typography
          type="h6"
          style={{ display: 'inline' }}
          color={isActiveNow ? theme.colors.primary.blue : theme.colors.text.general}
        >
          {label}
        </Typography>
      )}
      {variant === 'chip' && (
        <Chip
          label={label}
          type={isActiveNow ? 'primary' : 'default'}
          variants={isActiveNow ? 'filled' : 'outlined'}
        />
      )}
    </Wrapper>
  );
});

const Wrapper = styled(Button)`
  display: inline-block;
  padding: 2px 10px;
  border-radius: 4px 4px 0 0;
  transition: background-color 0.15s linear;

  &.default {
    border-bottom: 1px solid ${theme.colors.ui.border};

    &:hover {
      background-color: ${theme.colors.ui.hover};
    }

    &.active {
      color: ${theme.colors.primary.blue};
      border-color: ${theme.colors.primary.blue};
    }
  }
`;
