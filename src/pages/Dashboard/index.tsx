import Sidebar from './Sidebar';
import Runs from './Runs';
import { Route, Routes } from 'react-router';
import RunDetails from './RunDetails';

const Dashboard = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="bg-primary flex-1 p-5">
        <Routes>
          <Route index element={<Runs />} />
          <Route path="/runs/:run_id" element={<RunDetails />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
