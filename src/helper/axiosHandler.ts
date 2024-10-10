import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';

//Create axios handler

const axiosHandler: AxiosInstance = axios.create({
  baseURL: 'https://food-order-app-dcc18-default-rtdb.firebaseio.com',
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
