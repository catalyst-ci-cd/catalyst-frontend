import Sidebar from '../../components/Sidebar';
import Runs from './Runs';
import { Route, Routes } from 'react-router';
import RunDetails from './RunDetails';
import JobDetails from './JobDetails';

const Dashboard = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="bg-primary flex-1 p-5">
        <Routes>
          <Route index element={<Runs />} />
          <Route path="runs/:run_id" element={<RunDetails />} />
          <Route path="runs/:run_id/jobs/:job_id" element={<JobDetails />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
