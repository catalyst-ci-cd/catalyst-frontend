import { AxiosError } from 'axios';
import { IWorflowFormInput } from '@/pages/AddWorkflow';
import { IWorflowUpdateFormInput } from '@/pages/EditWorkflow';
import axiosInstance, { Response } from './axiosInstance';

interface ICreateRequestBody {
  name: string;
  content: string;
}

interface ICreateResponseBody {
  message: string;
  workflow: {
    content: string;
    created_at: string;
    deleted_at: string;
    id: number;
    name: string;
    user_id: number;
  };
}

export const CreateWorkflowHandler = async (
  data: IWorflowFormInput,
): Promise<Response<ICreateResponseBody>> => {
  try {
    const requestBody: ICreateRequestBody = {
      name: data.name,
      content: data.content,
    };
    const response = await axiosInstance.post('/workflows', requestBody, {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjF9.s4vE0w6cUg68FMf7GjCRpweMCQ92MdFjYM5apky7MHE`,
      },
    });
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

interface IEditRequestBody {
  content: string;
}

interface IEditResponseBody {
  message: string;
  workflow: {
    content: string;
    created_at: string;
    deleted_at: string;
    id: number;
    name: string;
    user_id: number;
  };
}

export const EditWorkflowHandler = async (
  data: IWorflowUpdateFormInput,
  id: string,
): Promise<Response<IEditResponseBody>> => {
  try {
    const requestBody: IEditRequestBody = {
      content: data.content,
    };
    const response = await axiosInstance.patch(
      `/workflows/${id}`,
      requestBody,
      {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjF9.s4vE0w6cUg68FMf7GjCRpweMCQ92MdFjYM5apky7MHE`,
        },
      },
    );
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
