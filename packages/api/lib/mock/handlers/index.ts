import { testHandlers } from './testHandler';
import { introductionHandlers } from './introductionHandler';

export const handlers = [...introductionHandlers, ...testHandlers];
