import { useCallback, useEffect, useState } from 'react';
import RunsTable, { IRowData } from './RunsTable';
import { listWorkflowsResults } from '@/services/WorkflowApi';

const Runs = () => {
  const [workflowRuns, setWorkflowRuns] = useState<IRowData[]>([]);
  const loadWorkflowRuns = useCallback(async () => {
    const result = await listWorkflowsResults('1');
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
      <RunsTable data={workflowRuns} />
    </>
  );
};

export default Runs;
