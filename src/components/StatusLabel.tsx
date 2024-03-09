import { FC } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { MdCancel } from 'react-icons/md';
import { TiCancel } from 'react-icons/ti';
import { IoTimeSharp } from 'react-icons/io5';

export type statusType = 'passed' | 'failed' | 'pending' | 'canceled';
interface StatusLabelProps {
  type: statusType;
}
const StatusLabel: FC<StatusLabelProps> = ({ type }) => {
  return type === 'passed' ? (
    <div className="flex items-center gap-2 w-fit m-auto rounded-full px-2 bg-green-700 text-lg text-white">
      <FaCheckCircle />
      <p className="text-base text-white">passed</p>
    </div>
  ) : type === 'failed' ? (
    <div className="flex items-center gap-2 w-fit m-auto rounded-full px-2 bg-red-700 text-lg text-white ">
      <MdCancel />
      <p className="text-white text-base">failed</p>
    </div>
  ) : type === 'pending' ? (
    <div className="flex items-center gap-2 w-fit m-auto rounded-full px-2 bg-yellow-600 text-lg text-white ">
      <IoTimeSharp />
      <p className="text-white text-base">pending</p>
    </div>
  ) : (
    <div className="flex items-center gap-2 w-fit m-auto rounded-full px-2 bg-gray-500 text-lg text-white ">
      <TiCancel />
      <p className="text-white text-base">canceled</p>
    </div>
  );
};

export default StatusLabel;
