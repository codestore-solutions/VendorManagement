import AxiosService from './axiosService';
import AxiosInterceptor from './axiosInterceptor';
import { BASEURL } from '@/assets/constant';

class Http extends AxiosService {

  public static async headerBuilder() {
    const token = localStorage.getItem('accessToken');
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    return headers;
  }

  public static urlBuilder(trailingUrl: string) {
    return `${BASEURL}/${trailingUrl}`;
  }

  public static async delete(url: string): Promise<any> {
    const headers = await this.headerBuilder();
    const completeUrl = this.urlBuilder(url);
    this.InjectMiddleware();
    return await AxiosService.delete(completeUrl, headers);
  }

  public static async get(url: string, headers?: any): Promise<any> {
    headers = await this.headerBuilder();
    const completeUrl = this.urlBuilder(url);
    this.InjectMiddleware();
    return await AxiosService.get(completeUrl, headers);
  }

  public static async post(
    url: string,
    data: any,
    headers?: any,
  ): Promise<any> {
    headers = await this.headerBuilder();
    const completeUrl = this.urlBuilder(url);
    this.InjectMiddleware();
    return await AxiosService.post(completeUrl, data, headers);
  }

  public static async put(
    url: string,
    data?: any,
    headers?: any,
  ): Promise<any> {
    headers = await this.headerBuilder();
    const completeUrl = this.urlBuilder(url);
    this.InjectMiddleware();
    return await AxiosService.put(completeUrl, data, headers);
  }

  public static async patch(
    url: string,
    data?: any,
    headers?: any,
  ): Promise<any> {
    headers = await this.headerBuilder();
    const completeUrl = this.urlBuilder(url);
    this.InjectMiddleware();
    return await AxiosService.patch(completeUrl, data, headers);
  }


  public static async xRequests(requests: any[]): Promise<any[]> {
    this.InjectMiddleware();
    return await AxiosService.all(requests);
  }

  private static InjectMiddleware() {
    this.SubscribeRequestInterceptor();
    this.SubscribeResponseInterceptor();
  }

  private static SubscribeRequestInterceptor() {
    AxiosInterceptor.subscribeRequest();
  }

  private static SubscribeResponseInterceptor() {
    AxiosInterceptor.subscribeResponse();
  }
}

export default Http;