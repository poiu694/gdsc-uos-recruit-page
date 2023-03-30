import { APIInterface } from '@gdsc-uos/api';

export class ServiceAPI extends APIInterface {
  constructor(url: string) {
    const baseUrl = `${process.env.NEXT_PUBLIC_SERVER_API}/api/${url ?? ''}`
    super({
      baseURL: process.env.NODE_ENV === 'production' ? baseUrl : `/api/${url}`,
    });
  }
}
