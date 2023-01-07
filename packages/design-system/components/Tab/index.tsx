import React from 'react';
import TabContext, { useTabContext } from './TabContext';

interface Props {
  value: string; // active index
  onChange: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

function Tab({ value, children, onChange }: React.PropsWithChildren<Props>) {
  const handleClickTabMenu = React.useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (typeof onChange !== 'undefined') {
        onChange(e);
      }
    },
    []
  );

  return (
    <TabContext.Provider value={{ value, onClickTabMenu: handleClickTabMenu }}>
      {children}
    </TabContext.Provider>
  );
}

export default Tab;
export { default as TabMenu } from './TabMenu';
export { default as TabContent } from './TabContent';
