import { useCallback, useEffect, useState } from 'react';
import JobResult, { JobResultProps } from './JobResult';
import LogsContainer, { LogsProps } from './LogsContainer';
import { useParams } from 'react-router-dom';
import { getWorkflowResults } from '@/services/WorkflowApi';

type JobDetailsParamsType = {
  run_id: string;
  job_id: string;
};

const JobDetails = () => {
  const { run_id, job_id } = useParams<JobDetailsParamsType>();

  const [jobDetails, setJobDetails] = useState<JobResultProps>({
    run_id: '',
    job_id: '',
    name: '',
    duration: '00:01:07',
    status: 'passed',
  });
  const [logs, setLogs] = useState<LogsProps['steps']>([]);
  const loadJobDetails = useCallback(async () => {
    if (run_id && job_id) {
      const result = await getWorkflowResults('1', run_id);
      if (result.status === 'success') {
        const jobData = result.data.workflow_result.jobResults.find(
          job => `${job.id}` === job_id,
        );
        if (jobData) {
          setLogs(jobData.stepResults);
          setJobDetails({
            run_id: run_id,
            job_id: job_id,
            name: jobData.name,
            status: jobData.state,
            duration: '00:01:07',
          });
        }
      }
    }
  }, [run_id, job_id]);
  useEffect(() => {
    loadJobDetails();
  }, [loadJobDetails]);
  return (
    <div className="flex h-[calc(100vh-40px)]">
      <LogsContainer steps={logs} />
      <JobResult
        run_id={jobDetails.run_id}
        job_id={jobDetails.job_id}
        name={jobDetails.name}
        duration={jobDetails.duration}
        status={jobDetails.status}
      />
    </div>
  );
};

export default JobDetails;
