import { TabType } from '.';
import { createGenericContext, createGenericUseContext } from '../../utils';

interface TabTriggerEvent {
  value: string;
  onClickTabMenu: (nextTabValue: string) => void;
  variant: TabType;
}

export const context = createGenericContext<TabTriggerEvent>();

export const useTabContext = createGenericUseContext<TabTriggerEvent>(context);
