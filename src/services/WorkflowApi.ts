import { AxiosError } from 'axios';
import axiosInstance, { Response } from './axiosInstance';
import { statusType } from '@/components/StatusLabel';

interface IListWorkflowsResultsResponseBody {
  message: string;
  workflows_results: {
    id: number;
    state: statusType;
    workflow_id: number;
    workflow_name: string;
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
    workflowID: number;
    createdAt: string;
    updatedAt: string;
    deletedAt: {
      time: string;
      valid: boolean;
    };
    jobResults: {
      id: number;
      workflowResultID: number;
      name: string;
      state: statusType;
      topologicalOrder: number;
      stepResults: {
        id: number;
        jobResultID: number;
        topologicalOrder: number;
        isSucceeded: boolean;
        logs: string;
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
