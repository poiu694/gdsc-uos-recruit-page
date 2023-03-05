import { APIInterface } from 'gdsc-uos-api';

export class AdminAPI extends APIInterface {
  constructor() {
    super({ baseURL: 'https://jsonplaceholder.typicode.com' });
  }
}
