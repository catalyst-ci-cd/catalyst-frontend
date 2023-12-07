import { RiLoopLeftFill } from 'react-icons/ri';
import { FaCheckCircle } from 'react-icons/fa';
import { MdCancel } from 'react-icons/md';
import { IconButton } from '@mui/material';

const data = [
  {
    id: 1,
    status: 'success',
    name: 'Run #1',
    workflow: 'Workflow #1',
    duration: '00:01:07',
    finished_at: '3 weeks ago',
  },
  {
    id: 2,
    status: 'fail',
    name: 'Run #1',
    workflow: 'Workflow #1',
    duration: '00:01:07',
    finished_at: '3 weeks ago',
  },
  {
    id: 3,
    status: 'fail',
    name: 'Run #1',
    workflow: 'Workflow #1',
    duration: '00:01:07',
    finished_at: '3 weeks ago',
  },
  {
    id: 3,
    status: 'success',
    name: 'Run #1',
    workflow: 'Workflow #1',
    duration: '00:01:07',
    finished_at: '3 weeks ago',
  },
  {
    id: 4,
    status: 'success',
    name: 'Run #1',
    workflow: 'Workflow #1',
    duration: '00:01:07',
    finished_at: '3 weeks ago',
  },
];

const Runs = () => {
  return (
    <div className="bg-primary min-h-screen">
      <div className="p-5">
        <div>
          <input
            className="bg-transparent w-full p-2 bg-white rounded-md focus:outline-none"
            placeholder="Filter Jobs"
          />
        </div>
        <div className="border border-solid border-white rounded-md my-2">
          <table className="text-white w-full">
            <thead>
              <tr className="border-b border-solid border-b-white">
                <th>status</th>
                <th>Runs</th>
                <th>Workflow</th>
                <th>Duration</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map(run => (
                <tr className="[&>td]:text-center">
                  <td className="[&>*]:m-auto text-xl">
                    {run.status == 'success' ? (
                      <FaCheckCircle className="text-green-700" />
                    ) : (
                      <MdCancel className="text-red-500" />
                    )}
                  </td>
                  <td>{run.name}</td>
                  <td>{run.workflow}</td>
                  <td className="text-xs">
                    <p>{run.duration}</p>
                    <p>{run.finished_at}</p>
                  </td>
                  <td className="[&>*]:m-auto text-xl">
                    <IconButton>
                      <RiLoopLeftFill className="text-white" />
                    </IconButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Runs;
