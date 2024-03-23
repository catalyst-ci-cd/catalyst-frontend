import { AxiosError } from 'axios';
import { ILoginFormInput } from '@/pages/Login';
import { ISignUpFormInput } from '@/pages/Signup';
import axiosInstance, { Response } from './axiosInstance';
import { UserType } from '@/contexts/AuthContext';
import { TokenResponse } from '@react-oauth/google';

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

interface IFetchUserDataResponseBody {
  message: string;
  user: UserType;
}

export const FetchUserData = async (
  token: string,
): Promise<Response<IFetchUserDataResponseBody>> => {
  try {
    const response = await axiosInstance.get('/users/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return { status: 'success', data: response.data };
  } catch (errors) {
    return {
      status: 'error',
      error: (errors as AxiosError).response?.data,
    };
  }
};

export const ContinueWithGoogleHandler = async (
  credentials: Omit<TokenResponse, 'error' | 'error_description' | 'error_uri'>,
): Promise<Response<ILoginResponseBody>> => {
  const url = `/users/login/google/callback?state=${credentials.state}&code=${credentials.access_token}&prompt=${credentials.prompt}&scope=${credentials.scope}`;
  try {
    const response = await axiosInstance.get(url);
    return { status: 'success', data: response.data };
  } catch (error) {
    return {
      status: 'error',
      error: (error as AxiosError).response?.data,
    };
  }
};

export const ContinueWithGithubHandler = async (
  access_token: string,
): Promise<Response<ILoginResponseBody>> => {
  const url = `/users/login/google/callback?code=${access_token}`;
  try {
    const response = await axiosInstance.get(url);
    return { status: 'success', data: response.data };
  } catch (error) {
    return {
      status: 'error',
      error: (error as AxiosError).response?.data,
    };
  }
};
