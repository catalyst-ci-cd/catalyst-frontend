import { RiLoopLeftFill } from 'react-icons/ri';
import { IconButton, Tooltip } from '@mui/material';
import StatusLabel, { statusType } from '../../../components/StatusLabel';
import { Link } from 'react-router-dom';
import GenericTable, { columnType } from '@/components/GenericTable';

interface IRowData {
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

const rows: IRowData[] = [
  {
    id: 1,
    status: 'running',
    name: 'Run #1',
    workflow: 'Workflow #1',
    duration: '00:01:07',
    finished_at: '3 weeks ago',
  },
  {
    id: 2,
    status: 'passed',
    name: 'Run #2',
    workflow: 'Workflow #2',
    duration: '00:01:07',
    finished_at: '3 weeks ago',
  },
  {
    id: 3,
    status: 'failed',
    name: 'Run #3',
    workflow: 'Workflow #1',
    duration: '00:01:07',
    finished_at: '3 weeks ago',
  },
  {
    id: 3,
    status: 'canceled',
    name: 'Run #4',
    workflow: 'Workflow #1',
    duration: '00:01:07',
    finished_at: '3 weeks ago',
  },
  {
    id: 4,
    status: 'passed',
    name: 'Run #5',
    workflow: 'Workflow #2',
    duration: '00:01:07',
    finished_at: '3 weeks ago',
  },
];

const RunsTable = () => {
  return <GenericTable columns={ColumnDefinition} data={rows} />;
};

export default RunsTable;
