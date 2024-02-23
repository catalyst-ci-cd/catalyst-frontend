import { useParams } from 'react-router';
import StatusLabel, { statusType } from '../../../components/StatusLabel';
import { IoTimeSharp } from 'react-icons/io5';
// import { RiLoopLeftFill } from 'react-icons/ri';

// import { IconButton, Tooltip } from '@mui/material';
import JobsTable, { IRowData } from './JobsTable';
import { Link } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { getWorkflowResults } from '@/services/WorkflowApi';

type RunDetailsParamsType = {
  run_id: string;
};
interface IWorkflowRunDetails {
  name: string;
  status: statusType;
  duration: string;
  filename: string;
}

const workflowRunDetails: IWorkflowRunDetails = {
  name: 'Workflow Name',
  status: 'running',
  duration: '00:01:07',
  filename: 'test-workflow1.yml',
};

const RunDetails = () => {
  const { run_id } = useParams<RunDetailsParamsType>();
  const [rows, setRows] = useState<IRowData[]>([]);
  const loadWorkflowResults = useCallback(async () => {
    if (run_id) {
      const result = await getWorkflowResults('1', run_id);
      if (result.status === 'success') {
        const rowsData: IRowData[] = result.data.workflow_result.jobResults.map(
          jobRun => ({
            id: jobRun.id,
            name: jobRun.name,
            duration: '00:01:07',
            status: jobRun.state,
          }),
        );
        setRows(rowsData);
      }
    }
  }, [run_id]);

  useEffect(() => {
    loadWorkflowResults();
  }, [loadWorkflowResults]);

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h2>{workflowRunDetails.name}</h2>
          <Link
            to="#"
            className="bg-gray-700 text-gray-300 my-3 text-base px-3 py-1 my-1 inline-block rounded-lg hover:underline"
          >
            {workflowRunDetails.filename}
          </Link>
        </div>
        {/* <Tooltip title="Rerun Workflow">
          <IconButton>
            <RiLoopLeftFill className="text-white text-3xl" />
          </IconButton>
        </Tooltip> */}
      </div>

      <div className="w-min my-3 flex gap-4">
        <StatusLabel type={workflowRunDetails.status} />
        <p className="flex gap-4 items-center">
          <IoTimeSharp /> {workflowRunDetails.duration}
        </p>
      </div>
      <div className="py-10">
        <JobsTable rows={rows} />
      </div>
    </div>
  );
};

export default RunDetails;
