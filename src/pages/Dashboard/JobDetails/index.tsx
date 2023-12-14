import JobResult from './JobResult';
import LogsContainer from './LogsContainer';

const JobDetails = () => {
  return (
    <div className="flex h-[calc(100vh-40px)]">
      <LogsContainer />
      <JobResult />
    </div>
  );
};

export default JobDetails;
