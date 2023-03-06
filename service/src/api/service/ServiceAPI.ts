import { APIInterface } from 'gdsc-uos-api';

export class AdminAPI extends APIInterface {
  constructor() {
    super({
      baseURL: process.env.NODE_ENV === 'production' ? 'https://jsonplaceholder.typicode.com' : '',
    });
  }
}
