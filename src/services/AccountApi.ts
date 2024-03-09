import { AxiosError } from 'axios';
import { ILoginFormInput } from '@/pages/Login';
import { ISignUpFormInput } from '@/pages/Signup';
import axiosInstance, { Response } from './axiosInstance';

interface ISignUpRequestBody {
  name: string;
  username: string;
  email: string;
  password: string;
}
interface ISignUpResponseBody {
  message: string;
  data: {
    id: string;
    email: string;
    name: string;
    username: string;
  };
}

export const SignUpHandler = async (
  data: ISignUpFormInput,
): Promise<Response<ISignUpResponseBody>> => {
  try {
    const requestBody: ISignUpRequestBody = {
      name: `${data.firstName} ${data.lastName}`,
      username: data.username,
      email: data.email,
      password: data.password,
    };
    const response = await axiosInstance.post('/users/register', requestBody);
    return {
      status: 'success',
      data: response.data,
    };
  } catch (errors) {
    return {
      status: 'error',
      error: (errors as AxiosError).response?.data,
    };
  }
};

interface ILoginRequestBody {
  email: string;
  password: string;
}

interface ILoginResponseBody {
  message: string;
  token: string;
}

export const LoginHandler = async (
  data: ILoginFormInput,
): Promise<Response<ILoginResponseBody>> => {
  try {
    const requestBody: ILoginRequestBody = {
      email: data.email,
      password: data.password,
    };
    const response = await axiosInstance.post('/users/login', requestBody);
    return { status: 'success', data: response.data };
  } catch (errors) {
    return {
      status: 'error',
      error: (errors as AxiosError).response?.data,
    };
  }
};
