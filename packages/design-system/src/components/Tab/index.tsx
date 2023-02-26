import React from 'react';
import { context as TabContext } from './TabContext';

export type TabType = 'default' | 'chip';
interface Props {
  value: string; // active index
  onChange: (nextTabValue: string) => void;
  variant?: TabType;
}

export function Tab({
  value,
  children,
  variant = 'default',
  onChange,
}: React.PropsWithChildren<Props>) {
  const handleClickTabMenu = React.useCallback(
    (nextTabValue: string) => {
      if (typeof onChange !== 'undefined') {
        onChange(nextTabValue);
      }
    },
    [onChange]
  );

  return (
    <TabContext.Provider value={{ value, onClickTabMenu: handleClickTabMenu, variant }}>
      {children}
    </TabContext.Provider>
  );
}

export * from './TabMenu';
export * from './TabContent';
