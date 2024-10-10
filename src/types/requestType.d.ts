import { AxiosRequestConfig } from 'axios';

type PostRequestFunctionParametersType = {
  data: any;
  config?: AxiosRequestConfig;
};

type GetRequestFunctionParametersType = {
  data?: any;
  config?: AxiosRequestConfig;
};

export { PostRequestFunctionParametersType, GetRequestFunctionParametersType };
