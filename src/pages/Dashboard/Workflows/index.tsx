import { useCallback, useEffect, useState } from 'react';
import WorkflowsTable, { IRowData } from './WorkflowsTable';
import { listWorkflows } from '@/services/WorkflowApi';

const Workflows = () => {
  const [workflows, setWorkflows] = useState<IRowData[]>([]);
  const loadWorkflowRuns = useCallback(async () => {
    const result = await listWorkflows('1');
    if (result.status === 'success') {
      const rowsData: IRowData[] = result.data.workflows.map(workflow => ({
        id: workflow.id,
        name: workflow.name,
      }));
      setWorkflows(rowsData);
    }
  }, []);
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
      <WorkflowsTable data={workflows} />
    </>
  );
};

export default Workflows;
