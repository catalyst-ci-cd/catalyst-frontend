import { useParams } from 'react-router';
import StatusLabel, { statusType } from '../../../components/StatusLabel';
import { IoTimeSharp } from 'react-icons/io5';
// import { RiLoopLeftFill } from 'react-icons/ri';

// import { IconButton, Tooltip } from '@mui/material';
import JobsTable, { IRowData } from './JobsTable';
import { useCallback, useEffect, useState } from 'react';
import { getWorkflowResults } from '@/services/WorkflowApi';
import { useAuthContext } from '@/contexts/AuthContext';

type RunDetailsParamsType = {
  run_id: string;
};
interface IWorkflowRunDetails {
  state: statusType;
  duration: number;
  created_at: string;
}

const RunDetails = () => {
  const [workflowRunDetails, setWorkflowRunDetails] =
    useState<IWorkflowRunDetails>();
  const { run_id } = useParams<RunDetailsParamsType>();
  const [rows, setRows] = useState<IRowData[]>([]);
  const { user } = useAuthContext();
  const loadWorkflowResults = useCallback(async () => {
    if (run_id) {
      const result = await getWorkflowResults(user!.id.toString(), run_id);

      if (result.status === 'success') {
        const rowsData: IRowData[] =
          result.data.workflow_result.job_results.map(jobRun => ({
            id: jobRun.id,
            name: jobRun.name,
            duration: jobRun.duration,
            status: jobRun.state,
          }));
        setRows(rowsData);

        const workflowRun = result.data.workflow_result;

        setWorkflowRunDetails({
          state: workflowRun.job_results[0].state,
          duration: workflowRun.job_results[0].duration,
          created_at: workflowRun.created_at,
        });
      }
    }
  }, [run_id, user]);

  useEffect(() => {
    loadWorkflowResults();
  }, [loadWorkflowResults]);

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h2>Created At: {workflowRunDetails?.created_at.split('T')[0]}</h2>
          {/* <Link
            to="#"
            className="bg-gray-700 text-gray-300 my-3 text-base px-3 py-1 inline-block rounded-lg hover:underline"
          >
            {workflowRunDetails.filename}
          </Link> */}
        </div>
        {/* <Tooltip title="Rerun Workflow">
          <IconButton>
            <RiLoopLeftFill className="text-white text-3xl" />
          </IconButton>
        </Tooltip> */}
      </div>

      <div className="w-min my-3 flex gap-4">
        <StatusLabel type={workflowRunDetails?.state} />
        <div className="flex gap-4 justify-between items-center">
          <IoTimeSharp className="text-gray-300 text-2xl" />{' '}
          <p className=" whitespace-nowrap">{workflowRunDetails?.duration} s</p>
        </div>
      </div>
      <div className="py-10">
        <JobsTable rows={rows} />
      </div>
    </div>
  );
};

export default RunDetails;
