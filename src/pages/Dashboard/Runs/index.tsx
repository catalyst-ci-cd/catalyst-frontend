import { useCallback, useEffect, useState } from 'react';
import RunsTable, { IRowData } from './RunsTable';
import { listWorkflowsResults } from '@/services/WorkflowApi';
import Spinner from '@/components/Spinner';
import noDataImage from '@/assets/no-data.jpg';

const Runs = () => {
  const [workflowRuns, setWorkflowRuns] = useState<IRowData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const loadWorkflowRuns = useCallback(async () => {
    setIsLoading(true);
    const result = await listWorkflowsResults('1');
    setIsLoading(false);
    if (result.status === 'success') {
      const rowsData: IRowData[] = result.data.workflows_results.map(
        workflowRun => ({
          id: workflowRun.id,
          duration: '00:01:07',
          finished_at: '2 days ago',
          name: workflowRun.workflow_name,
          workflow: 'Run #' + workflowRun.workflow_id,
          status: workflowRun.state,
        }),
      );
      setWorkflowRuns(rowsData);
    }
  }, []);
  useEffect(() => {
    loadWorkflowRuns();
  }, [loadWorkflowRuns]);
  return (
    <>
      <h2 className="mb-10">Workflow Runs</h2>
      <input
        className="w-full p-4 bg-secondary border border-solid border-tertiary rounded-md focus:outline-none my-5 text-white"
        placeholder="Filter Jobs"
      />
      {isLoading ? (
        <div>
          <Spinner />
        </div>
      ) : workflowRuns.length === 0 ? (
        <div>
          <img src={noDataImage} className="m-auto block w-[30%]" />
          <p className="text-white text-center font-bold my-5">
            No Workflows Results Found
          </p>
        </div>
      ) : (
        <RunsTable data={workflowRuns} />
      )}
    </>
  );
};

export default Runs;
