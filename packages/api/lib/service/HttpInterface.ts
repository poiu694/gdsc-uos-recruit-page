import type { AxiosInstance, AxiosResponse } from 'axios';
import axios from 'axios';

export class HttpInterface {
  protected readonly instance: AxiosInstance;

  public constructor(baseURL: string) {
    this.instance = axios.create({
      baseURL,
    });
  }

  protected handleResponse = (response: AxiosResponse) => response.data;

  protected handleError = (error: any) => Promise.reject(error);
}
