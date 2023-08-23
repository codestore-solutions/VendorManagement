import { notification } from 'antd';
import axios from 'axios';

class AxiosInterceptor {
  private static reqInterceptor: number;
  private static resInterceptor: number;

  // declare a request interceptor
  static subscribeRequest() {
    if (this.reqInterceptor === undefined) {
      this.reqInterceptor = axios.interceptors.request.use(
        (config: any) => {
          // perform a task before the request is sent
          return config;
        },
        (error: any) => {
          // handle error
          return Promise.reject(error);
        },
      );
    }
  }

  // declare a response interceptor
  static subscribeResponse() {
    if (this.resInterceptor === undefined) {
      this.resInterceptor = axios.interceptors.response.use(
        (response: any) => {
          return response.data;
        },
        (error: any) => {
          // handle the response error 
          if (error.response && error.response.data) {
            notification.error({
              message: 'Signup failed',
              description: error.response.data.message,
            });
          }
          return Promise.reject(error);
        },
      );
    }
  }
}

export default AxiosInterceptor;