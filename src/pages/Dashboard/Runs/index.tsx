import RunsTable from './RunsTable';

const Runs = () => {
  return (
    <div className="bg-primary flex-1">
      <div className="p-5">
        <h2 className="mb-10">Workflow Runs</h2>
        <input
          className="w-full p-4 bg-secondary border border-solid border-tertiary rounded-md focus:outline-none my-5 text-white"
          placeholder="Filter Jobs"
        />
        <RunsTable />
      </div>
    </div>
  );
};

export default Runs;
