import { FC } from 'react';

export interface LogsProps {
  steps: {
    id: number;
    job_result_id: number;
    topological_order: number;
    is_succeeded: boolean;
    logs: string;
    command: string;
  }[];
}

const LogsContainer: FC<LogsProps> = ({ steps }) => {
  return (
    <div className="flex-1 flex flex-col p-4">
      <h2 className="mb-4">Logs</h2>
      <div className="bg-black p-5 text-white rounded-2xl flex-1 overflow-auto">
        {steps.map(step => (
          <div key={step.id}>
            <p>{step.command}</p>
            <div
              className={`flex my-2 ${
                step.is_succeeded ? 'text-green-500' : 'text-red-500'
              }`}
            >
              <p className="mr-3">&gt;</p>
              <p className="text-inherit">{step.logs}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogsContainer;
