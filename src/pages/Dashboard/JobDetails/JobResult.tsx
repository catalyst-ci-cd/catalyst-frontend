import StatusLabel, { statusType } from '../../../components/StatusLabel';
import { IoTimeSharp } from 'react-icons/io5';
import { Drawer } from '@mui/material';
import { MdOutlineContentPasteSearch } from 'react-icons/md';
import { FC, useState } from 'react';

export interface JobResultProps {
  name: string;
  status: statusType;
  duration: number;
  run_id: string;
  job_id: string;
}

const JobResult: FC<JobResultProps> = ({
  name,
  status,
  duration,
  run_id,
  job_id,
}) => {
  const [openSidebarDrawer, setOpenSidebarDrawer] = useState(false);
  return (
    <>
      <div className="hidden lg:block w-[300px] bg-secondary -mr-5 -mt-5 px-3 py-8">
        <h3>{name}</h3>
        <div className="w-fit my-4">
          <StatusLabel type={status} />
        </div>
        <p className="flex items-center gap-2 text-white text-xl">
          <IoTimeSharp />
          {duration} s
        </p>
        <p className="text-white my-3 text-lg">
          <span className="font-bold">Run ID:</span> #{run_id}
        </p>
        <p className="text-white my-3 text-lg">
          <span className="font-bold">Job ID:</span> #{job_id}
        </p>
      </div>
      <div className="lg:hidden fixed right-4 bottom-4">
        <button
          className="text-white text-3xl p-2 m-3 border border-solid border-tertiary bg-secondary rounded-lg"
          onClick={() => setOpenSidebarDrawer(true)}
        >
          <MdOutlineContentPasteSearch />
        </button>
      </div>
      <Drawer
        className="[&>.MuiDrawer-paper]:p-5 [&>.MuiDrawer-paper]:bg-secondary [&>.MuiDrawer-paper]:w-[300px] text-white"
        open={openSidebarDrawer}
        onClose={() => setOpenSidebarDrawer(false)}
      >
        <div className="w-[300px] bg-secondary -mr-5 -mt-5 px-3 py-8">
          <h3>{name}</h3>
          <div className="w-fit my-4">
            <StatusLabel type={status} />
          </div>
          <p className="flex items-center gap-2 text-white text-xl">
            <IoTimeSharp />
            {duration} s
          </p>
          <p className="text-white my-3 text-lg">
            <span className="font-bold">Run ID:</span> #{run_id}
          </p>
          <p className="text-white my-3 text-lg">
            <span className="font-bold">Job ID:</span> #{job_id}
          </p>
        </div>
      </Drawer>
    </>
  );
};

export default JobResult;
