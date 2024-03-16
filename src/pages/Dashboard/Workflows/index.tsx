import { useCallback, useEffect, useState } from 'react';
import WorkflowsTable, { IRowData } from './WorkflowsTable';
import { listWorkflows } from '@/services/WorkflowApi';
import Spinner from '@/components/Spinner';
import noDataImage from '@/assets/no-data.jpg';
import { useAuthContext } from '@/contexts/AuthContext';

const Workflows = () => {
  const { user } = useAuthContext();
  const [workflows, setWorkflows] = useState<IRowData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const loadWorkflowRuns = useCallback(async () => {
    setIsLoading(true);
    const result = await listWorkflows(user!.id.toString());
    setIsLoading(false);
    if (result.status === 'success') {
      const rowsData: IRowData[] = result.data.workflows.map(workflow => ({
        id: workflow.id,
        name: workflow.name,
      }));
      setWorkflows(rowsData);
    }
  }, [user]);
  useEffect(() => {
    loadWorkflowRuns();
  }, [loadWorkflowRuns]);

  return (
    <>
      <h2 className="mb-10">Workflow</h2>
      <input
        className="w-full p-4 bg-secondary border border-solid border-tertiary rounded-md focus:outline-none my-5 text-white"
        placeholder="Filter Workflows"
      />
      {isLoading ? (
        <div>
          <Spinner />
        </div>
      ) : workflows.length === 0 ? (
        <div>
          <img src={noDataImage} className="m-auto block w-[30%]" />
          <p className="text-white text-center font-bold my-5">
            No Workflows Found
          </p>
          <a
            href="/dashboard/add-workflow"
            className="bg-accent block m-auto px-4 py-2 text-xl w-fit shadow-lg shadow-slate-600 rounded-md"
          >
            Add Workflow
          </a>
        </div>
      ) : (
        <WorkflowsTable data={workflows} />
      )}
    </>
  );
};

export default Workflows;
