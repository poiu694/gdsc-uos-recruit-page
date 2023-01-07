import React from 'react';
import { createGenericContext, createGenericUseContext } from '../../utils/helperContext';

interface TabTriggerEvent {
  value: string;
  onClickTabMenu: React.MouseEventHandler<HTMLButtonElement>;
}

const context = createGenericContext<TabTriggerEvent>();
export default context;

export const useTabContext = createGenericUseContext<TabTriggerEvent>(context);
