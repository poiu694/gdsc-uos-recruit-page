import { createGenericContext, createGenericUseContext } from 'gdsc-uos-design-system';

import { TestAPI } from './service';

interface APIAxios {
  readonly test: TestAPI;
}

export const context = createGenericContext<APIAxios>();

export const useAPIContext = createGenericUseContext<APIAxios>(context);