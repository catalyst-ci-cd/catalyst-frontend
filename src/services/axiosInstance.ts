import axios from 'axios';

export type Response<T> =
  | {
      status: 'success';
      data: T;
    }
  | {
      status: 'error';
      error: any;
    };

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_ROOT_URL}/api/v1`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
