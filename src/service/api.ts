import { EnvironmentType } from '@/constants/Envirounments';

import { HttpVerb } from '@/enums/httpVerbs';

import getCookieValue from '@/utils/getCookieValue';

import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

type ApiServiceType = { baseUrl: EnvironmentType, needToken?: boolean, tokenProvider?: ()=> string | undefined };

type FetchOnly = { resourcePath: string, config?: AxiosRequestConfig };
type DataAttached<T> = FetchOnly & { data: T };

type ServicePayload<T> = {
  requestOptions: FetchOnly | DataAttached<T>;
  type: HttpVerb
}

export class ApiService {
  private apiConfig: AxiosInstance;
  private needToken?: boolean;
  private tokenProvider: () => string | undefined;

  constructor({ baseUrl, needToken = false, tokenProvider = () => getCookieValue('jwt') }: ApiServiceType) {
    this.needToken = needToken;
    this.tokenProvider = tokenProvider;
    this.apiConfig = axios.create({ baseURL: String(baseUrl) });
    this.initConfig();
  }

  /**
   * Performs an API request based on the provided payload
   * @param {ServicePayload<T>} payload - The payload containing request details
   * @returns {Promise<T>} Promise resolving to the response data
   * @throws {Error} Throws an error if the request fails
  */
  public async request<T>(payload: ServicePayload<T>): Promise<T> {
    try {
      const response = await this.apiConfig.request({
        method: payload.type,
        url: payload.requestOptions.resourcePath,
        data: 'data' in payload.requestOptions ? payload.requestOptions.data : undefined,
        ...payload.requestOptions.config,
      });
      return response.data;
    } catch (error) {
      console.error('Request failed:', error);
      throw error;
    }
  }

  private initInterceptors(): AxiosInstance {
    this.apiConfig.interceptors.response.use((response) => {
      if (response.data && response.data.responseError) {
        throw response.data.responseError;
      }
      return response;
    }, (error) => Promise.reject(error));

    this.apiConfig.interceptors.request.use((config) => {
      const token = this.tokenProvider();
      if (token && this.needToken) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    return this.apiConfig;
  }

  private initConfig(): AxiosInstance {
    return this.initInterceptors();
  }
}
