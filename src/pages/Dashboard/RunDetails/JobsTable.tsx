import StatusLabel, { statusType } from '../StatusLabel';
import { Link } from 'react-router-dom';
import GenericTable, { columnType } from '@/components/GenericTable';

interface IRowData {
  id: number;
  status: statusType;
  name: string;
  duration: string;
}
const ColumnDefinition: columnType<IRowData>[] = [
  {
    name: 'status',
    displayName: 'Status',
    type: 'custom',
    width: 30,
    content: row => <StatusLabel type={row.status} />,
  },
  {
    name: 'name',
    displayName: 'Name',
    type: 'custom',

    content: row => (
      <Link to={`jobs/${row.id}`} className="hover:underline text-blue-200">
        {row.name}
      </Link>
    ),
  },
  {
    name: 'duration',
    displayName: 'Duration',
    type: 'text',
  },
];

const rows: IRowData[] = [
  {
    id: 1,
    status: 'running',
    name: 'Job #1',
    duration: '00:01:07',
  },
  {
    id: 2,
    status: 'passed',
    name: 'Job #2',
    duration: '00:01:07',
  },
  {
    id: 3,
    status: 'failed',
    name: 'Job #3',
    duration: '00:01:07',
  },
  {
    id: 4,
    status: 'canceled',
    name: 'Job #4',
    duration: '00:01:07',
  },
  {
    id: 5,
    status: 'passed',
    name: 'Job #5',
    duration: '00:01:07',
  },
];

const JobsTable = () => {
  return <GenericTable columns={ColumnDefinition} data={rows} />;
};

export default JobsTable;
