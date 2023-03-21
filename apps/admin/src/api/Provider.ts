import { createGenericContext, createGenericUseContext } from '@gdsc-uos/ui';

import { TestAPI } from './service';

interface APIAxios {
  readonly test: TestAPI;
}

export const context = createGenericContext<APIAxios>();

export const useAPIContext = createGenericUseContext<APIAxios>(context);
