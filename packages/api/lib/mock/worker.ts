import { setupWorker } from 'msw';

import { handlers } from './testHandler';

const worker = setupWorker(...handlers);

export { worker };
