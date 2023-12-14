import Sidebar from './Sidebar';
import Runs from './Runs';

const Dashboard = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <Runs />
    </div>
  );
};

export default Dashboard;
