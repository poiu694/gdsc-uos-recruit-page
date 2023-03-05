import type { AxiosRequestConfig, HeadersDefaults, Method } from 'axios';

import { createFormData } from './utils';
import { HttpInterface } from './httpInterface';

export enum ContentType {
  json = 'application/json',
  form = 'multipart/form-data',
}

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams
  extends Omit<AxiosRequestConfig, 'data' | 'params' | 'url' | 'responseType'> {
  /** set parameter to `true` for call `secureHeader` for this request */
  method: Method;
  secure?: boolean;
  /** request path */
  url: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** request body */
  data?: unknown;
}

export interface ApiConfig extends Omit<AxiosRequestConfig, 'data' | 'cancelToken'> {
  baseURL: string;
  secure?: boolean;
}

export abstract class APIInterface extends HttpInterface {
  private secure?: boolean;
  private token: string | null = null;

  constructor({ baseURL, secure }: ApiConfig) {
    super(baseURL);
    this.secure = secure;
  }

  public setToken(token: string) {
    this.token = token;
  }

  private secureParams(secure?: boolean): typeof this.secureHeader | object {
    const isSecure = typeof secure === 'boolean' ? secure : this.secure;
    return isSecure ? this.secureHeader : {};
  }

  private mergeRequestParams(
    params1: AxiosRequestConfig,
    params2?: AxiosRequestConfig,
  ): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method &&
          this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) ||
          {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private get secureHeader() {
    return {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    };
  }

  public request = async <T>({
    secure,
    url,
    query,
    data,
    type = ContentType.json,
    ...params
  }: FullRequestParams): Promise<T> => {
    const secureParams = this.secureParams(secure);
    const requestParams = this.mergeRequestParams(params, secureParams);

    if (type === ContentType.form) {
      data = createFormData(data as Record<string, unknown>);
    }
    return this.instance
      .request<T>({
        ...requestParams,
        headers: {
          'Content-Type': type,
          ...(requestParams.headers || {}),
        },
        params: query,
        data,
        url,
      })
      .then(this.handleResponse)
      .catch(this.handleError);
  };
}
