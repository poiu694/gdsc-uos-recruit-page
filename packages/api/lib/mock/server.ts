import { setupServer } from 'msw/node';

import { handlers } from './testHandler';

const server = setupServer(...handlers);

export { server };
