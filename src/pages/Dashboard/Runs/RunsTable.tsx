import { RiLoopLeftFill } from 'react-icons/ri';
import { IconButton, Tooltip } from '@mui/material';
import StatusLabel, { statusType } from '../../../components/StatusLabel';
import { Link } from 'react-router-dom';
import GenericTable, { columnType } from '@/components/GenericTable';
import { FC } from 'react';

export interface IRowData {
  id: number;
  status: statusType;
  name: string;
  workflow: string;
  duration: string;
  finished_at: string;
}

const ColumnDefinition: columnType<IRowData>[] = [
  {
    name: 'status',
    displayName: 'Status',
    width: 30,
    type: 'custom',
    content: row => <StatusLabel type={row.status} />,
  },
  {
    name: 'name',
    displayName: 'Name',
    type: 'custom',

    content: row => (
      <Link to={`runs/${row.id}`} className="hover:underline text-blue-200">
        {row.name}
      </Link>
    ),
  },
  {
    name: 'workflow',
    displayName: 'Workflow',
    type: 'custom',

    content: row => (
      <Link
        to={`workflows/${row.workflow}`}
        className="hover:underline text-blue-200"
      >
        {row.workflow}
      </Link>
    ),
  },
  {
    name: 'duration',
    displayName: 'Duration',
    type: 'text',
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
