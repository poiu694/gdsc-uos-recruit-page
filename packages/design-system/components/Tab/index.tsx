import React from 'react';
import TabContext from './TabContext';

interface Props {
  value: string; // active index
  onChange: (nextTabValue: string) => void;
}

function Tab({ value, children, onChange }: React.PropsWithChildren<Props>) {
  const handleClickTabMenu = React.useCallback((nextTabValue: string) => {
    if (typeof onChange !== 'undefined') {
      onChange(nextTabValue);
    }
  }, []);

  return (
    <TabContext.Provider value={{ value, onClickTabMenu: handleClickTabMenu }}>
      {children}
    </TabContext.Provider>
  );
}

export default Tab;
export { default as TabMenu } from './TabMenu';
export { default as TabContent } from './TabContent';
