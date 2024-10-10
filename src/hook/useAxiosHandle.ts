import { AxiosRequestConfig } from 'axios';
import axiosHandler from '../helper/axiosHandler';

const useAxiosHandle = () => {
  const getRequest = async <T>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<T> => {
    return axiosHandler.get<T, any>(url, config);
  };

  const postRequest = async <T>(
    url: string,
    data: any,
    config?: AxiosRequestConfig,
  ): Promise<T> => {
    return axiosHandler.post<T, any>(url, data, config);
  };

  return { getRequest, postRequest };
};

export default useAxiosHandle;
