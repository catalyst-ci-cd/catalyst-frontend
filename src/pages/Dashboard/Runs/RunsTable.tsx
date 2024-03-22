import { RiLoopLeftFill } from 'react-icons/ri';
import { IconButton, Tooltip } from '@mui/material';
import StatusLabel, { statusType } from '../../../components/StatusLabel';
import { Link } from 'react-router-dom';
import GenericTable, { columnType } from '@/components/GenericTable';
import { FC } from 'react';
import { formatDistanceToNow } from 'date-fns';

export interface IRowData {
  id: number;
  status: statusType;
  name: string;
  workflow: string;
  duration: number;
  created_at: string;
}

const ColumnDefinition: columnType<IRowData>[] = [
  {
    name: 'status',
    displayName: 'Status',
    width: 30,
    type: 'custom',
    content: row => {
      return <StatusLabel type={row.data.status} />;
    },
  },
  {
    name: 'name',
    displayName: 'Name',
    type: 'custom',

    content: row => (
      <Link to={`${row.data.id}`} className="hover:underline text-blue-200">
        {row.data.name}
      </Link>
    ),
  },
  {
    name: 'workflow',
    displayName: 'Workflow',
    type: 'custom',

    content: row => (
      <Link to={`${row.data.id}`} className="hover:underline text-blue-200">
        {row.data.workflow}
      </Link>
    ),
  },
  {
    name: 'duration',
    displayName: 'Duration',
    type: 'custom',
    content: row => <p className="text-white text-lg">{row.data.duration} s</p>,
  },
  {
    name: 'created at',
    displayName: 'Created At',
    type: 'custom',
    content: row => (
      <p className="text-white text-lg">
        {formatDistanceToNow(new Date(row.data.created_at), {
          addSuffix: true,
        })}
      </p>
    ),
  },
  {
    name: 'actions',
    displayName: 'Actions',
    width: 30,
    type: 'custom',
    content: () => (
      <Tooltip title={'Rerun Job'} arrow>
        <IconButton>
          <RiLoopLeftFill className="text-white" />
        </IconButton>
      </Tooltip>
    ),
  },
];

interface RunsTableProps {
  data: IRowData[];
}

const RunsTable: FC<RunsTableProps> = ({ data }) => {
  return <GenericTable columns={ColumnDefinition} data={data} />;
};

export default RunsTable;
