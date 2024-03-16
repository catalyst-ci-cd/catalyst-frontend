import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import NotFound from './pages/NotFound';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import { useAuthContext } from './contexts/AuthContext';

const App = () => {
  const { isLoading } = useAuthContext();
  return isLoading ? (
    <></>
  ) : (
    <div className="font-roboto">
      <ToastContainer />
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="workflows/*" element={<Dashboard />} />
        <Route index element={<Landing />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
export default App;
