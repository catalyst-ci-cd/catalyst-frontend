import { AxiosError } from 'axios';
import axiosInstance, { Response } from './axiosInstance';
import { IWorflowFormInput } from '@/pages/AddWorkflow';
import { IWorflowUpdateFormInput } from '@/pages/EditWorkflow';
import { statusType } from '@/components/StatusLabel';
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
  token: string,
): Promise<Response<ICreateResponseBody>> => {
  try {
    const requestBody: ICreateRequestBody = {
      name: data.name,
      content: data.content,
    };
    const response = await axiosInstance.post('/workflows', requestBody, {
      headers: {
        Authorization: `Bearer ${token}`,
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
  token: string,
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
          Authorization: `Bearer ${token}`,
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

interface IListWorkflowsResultsResponseBody {
  message: string;
  workflows_results: {
    id: number;
    state: statusType;
    workflow_id: number;
    workflow_name: string;
    duration: number;
    created_at: string;
  }[];
}
export const listWorkflowsResults = async (
  userId: string,
): Promise<Response<IListWorkflowsResultsResponseBody>> => {
  try {
    const url = `/workflow-results?userId=${userId}`;
    const response = await axiosInstance.get(url);
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

interface IGetWorkflowResultsResponseBody {
  message: string;
  workflow_result: {
    id: number;
    workflow_id: number;
    created_at: string;
    updated_at: string;
    job_results: {
      created_at: string;
      id: number;
      workflow_result_id: number;
      duration: number;
      name: string;
      state: statusType;
      topological_order: number;
      step_results: {
        id: number;
        job_result_id: number;
        topological_order: number;
        is_succeeded: boolean;
        logs: string;
        duration: number;
        command: string;
      }[];
    }[];
  };
}

export const getWorkflowResults = async (
  userId: string,
  workflowId: string,
): Promise<Response<IGetWorkflowResultsResponseBody>> => {
  try {
    const url = `/workflow-results/${workflowId}?userId=${userId}`;
    const response = await axiosInstance.get(url);
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

interface IListWorkflowsResponseBody {
  message: string;
  workflows: {
    id: number;
    user_id: number;
    name: string;
    created_at: string;
    deleted_at: string;
    content: string;
  }[];
}

export const listWorkflows = async (
  userId: string,
): Promise<Response<IListWorkflowsResponseBody>> => {
  try {
    const url = `/workflows?userId=${userId}`;
    const response = await axiosInstance.get(url);
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

interface IGetWorkflowByIdResponseBody {
  message: string;
  workflow: {
    id: number;
    user_id: number;
    name: string;
    created_at: string;
    deleted_at: string;
    content: string;
  };
}
export const getWorkflowById = async (
  workflowId: string,
): Promise<Response<IGetWorkflowByIdResponseBody>> => {
  try {
    const url = `/workflows/${workflowId}`;
    const response = await axiosInstance.get(url);
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

export const deleteSingleWorkflow = async (
  workflowId: string,
  token: string,
): Promise<Response<null>> => {
  try {
    const url = `/workflows/${workflowId}`;
    const response = await axiosInstance.delete(url, {
      headers: {
        Authorization: `Bearer ${token}`,
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
