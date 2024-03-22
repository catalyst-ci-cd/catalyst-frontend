import Sidebar from '../../components/Sidebar';
import Runs from './Runs';
import { Route, Routes } from 'react-router';
import RunDetails from './RunDetails';
import JobDetails from './JobDetails';
import Workflows from './Workflows';
import AddWorkFlow from '../AddWorkflow';
import EditWorkFlow from '../EditWorkflow';
import WithAuth from '@/HOCs/WithAuth';
import NotFound from '../NotFound';

const Dashboard = WithAuth(() => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="bg-primary flex-1 p-8">
        <Routes>
          <Route index element={<Workflows />} />
          <Route path="runs" element={<Runs />} />
          <Route path="runs/:run_id" element={<RunDetails />} />
          <Route path="runs/:run_id/jobs/:job_id" element={<JobDetails />} />
          <Route path="add-workflow" element={<AddWorkFlow />} />
          <Route path="edit-workflow/:id" element={<EditWorkFlow />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
});

export default Dashboard;
