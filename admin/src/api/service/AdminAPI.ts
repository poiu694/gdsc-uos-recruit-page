import { APIInterface } from '@gdsc-uos/api';

export class AdminAPI extends APIInterface {
  constructor() {
    super({ baseURL: import.meta.env.PROD ? 'https://jsonplaceholder.typicode.com' : '' });
  }
}
