import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import NotFound from './pages/NotFound';
import Landing from './pages/Landing';
import AddWorkFlow from './pages/AddWorkflow';
import EditWorkFlow from './pages/EditWorkflow';

const App = () => {
  return (
    <div className="font-roboto">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Landing />} />
        <Route path="/add-workflow" element={<AddWorkFlow />} />
        <Route path="/edit-workflow/:id" element={<EditWorkFlow />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
export default App;
