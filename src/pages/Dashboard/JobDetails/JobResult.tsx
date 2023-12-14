import { useParams } from 'react-router-dom';
import StatusLabel, { statusType } from '../StatusLabel';
import { IoTimeSharp } from 'react-icons/io5';

type JobDetailsParamsType = {
  run_id: string;
  job_id: string;
};

interface IJobResult {
  name: string;
  status: statusType;
  duration: string;
}

const JobResultDetails: IJobResult = {
  name: 'Job #1',
  status: 'running',
  duration: '00:01:07',
};

const JobResult = () => {
  const { run_id, job_id } = useParams<JobDetailsParamsType>();

  return (
    <div className="w-[300px] bg-secondary -mr-5 -mt-5 px-3 py-8">
      <h3>{JobResultDetails.name}</h3>
      <div className="w-fit my-4">
        <StatusLabel type={JobResultDetails.status} />
      </div>
      <p className="flex items-center gap-2 text-white text-xl">
        <IoTimeSharp />
        {JobResultDetails.duration}
      </p>
      <p className="text-white my-3 text-lg">
        <span className="font-bold">Run ID:</span> #{run_id}
      </p>
      <p className="text-white my-3 text-lg">
        <span className="font-bold">Job ID:</span> #{job_id}
      </p>
    </div>
  );
};

export default JobResult;
