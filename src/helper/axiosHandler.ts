import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';
import { REACT_APP_FIREBASE_BASE_URL } from './envConfig/envConfig';

//Create axios handler
console.log('========process.env', process.env);

const axiosHandler: AxiosInstance = axios.create({
  baseURL: `${REACT_APP_FIREBASE_BASE_URL}`,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosHandler.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    console.log('=======axios error===========', error);
    return error;
  },
);

export default axiosHandler;
