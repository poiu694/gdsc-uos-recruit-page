import { APIInterface } from '@gdsc-uos/api';

export class AdminService extends APIInterface {
  constructor(url: string) {
    const baseUrl = `${import.meta.env.SERVER_URL ?? ''}/api/${url ?? ''}`;
    super({ baseURL: import.meta.env.PROD ? baseUrl : '' });
  }
}
