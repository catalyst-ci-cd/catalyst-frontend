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
  return {
    status: 'success',
    data: {
      message: 'Done',
      workflows_results: [
        {
          id: 1,
          workflow_id: 1,
          state: 'passed',
          workflow_name: 'test.yml',
        },
        {
          id: 2,
          workflow_id: 2,
          state: 'failed',
          workflow_name: 'test.yml',
        },
        {
          id: 3,
          workflow_id: 3,
          state: 'running',
          workflow_name: 'build.yml',
        },
        {
          id: 4,
          workflow_id: 4,
          state: 'canceled',
          workflow_name: 'deploy.yml',
        },
      ],
    },
  };
  try {
    const url = `/workflow-results/?userId=${userId}`;
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
  return {
    status: 'success',
    data: {
      message: 'Done',
      workflow_result: {
        id: 12,
        createdAt: '12',
        updatedAt: 'a123',
        deletedAt: {
          time: '12',
          valid: true,
        },
        workflowID: 1,
        jobResults: [
          {
            id: 1,
            name: 'Build',
            state: 'passed',
            stepResults: [
              {
                id: 1,
                jobResultID: 1,
                topologicalOrder: 1,
                isSucceeded: true,
                logs: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae`,
              },
              {
                id: 2,
                jobResultID: 2,
                topologicalOrder: 2,
                isSucceeded: true,
                logs: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae`,
              },
              {
                id: 3,
                jobResultID: 3,
                topologicalOrder: 3,
                isSucceeded: true,
                logs: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae`,
              },
              {
                id: 3,
                jobResultID: 3,
                topologicalOrder: 3,
                isSucceeded: true,
                logs: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae`,
              },
              {
                id: 3,
                jobResultID: 3,
                topologicalOrder: 3,
                isSucceeded: true,
                logs: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae`,
              },
              {
                id: 3,
                jobResultID: 3,
                topologicalOrder: 3,
                isSucceeded: true,
                logs: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae`,
              },
              {
                id: 3,
                jobResultID: 3,
                topologicalOrder: 3,
                isSucceeded: true,
                logs: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae`,
              },
              {
                id: 4,
                jobResultID: 4,
                topologicalOrder: 4,
                isSucceeded: false,
                logs: `eaque rerum! Provident similique accusantium nemo autem. Veritatis
                obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
                sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
                recusandae alias error harum maxime adipisci amet laborum.`,
              },
            ],
            topologicalOrder: 1,
            workflowResultID: 1,
          },
          {
            id: 2,
            name: 'Test',
            state: 'failed',
            stepResults: [],
            topologicalOrder: 2,
            workflowResultID: 1,
          },
          {
            id: 3,
            name: 'Deploy',
            state: 'canceled',
            stepResults: [],
            topologicalOrder: 3,
            workflowResultID: 1,
          },
          {
            id: 4,
            name: 'Migrate',
            state: 'running',
            stepResults: [],
            topologicalOrder: 4,
            workflowResultID: 1,
          },
        ],
      },
    },
  };
  try {
    const url = `/workflow-results/${workflowId}/?userId=${userId}`;
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
  return {
    status: 'success',
    data: {
      message: 'Done',
      workflows: [
        {
          id: 1,
          content: 'Test',
          name: 'test.yml',
          user_id: 1,
          created_at: '01/01/2002',
          deleted_at: '01/01/2002',
        },
        {
          id: 2,
          content: 'Test',
          name: 'build.yml',
          user_id: 1,
          created_at: '01/01/2002',
          deleted_at: '01/01/2002',
        },
        {
          id: 3,
          content: 'Test',
          name: 'deploy.yml',
          user_id: 1,
          created_at: '01/01/2002',
          deleted_at: '01/01/2002',
        },
      ],
    },
  };
  try {
    const url = `/workflows/?userId=${userId}`;
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
