import { createGenericContext, createGenericUseContext } from '../../utils/helperContext';

interface TabTriggerEvent {
  value: string;
  onClickTabMenu: (nextTabValue: string) => void;
}

const context = createGenericContext<TabTriggerEvent>();
export default context;

export const useTabContext = createGenericUseContext<TabTriggerEvent>(context);
