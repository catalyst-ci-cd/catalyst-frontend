import StatusLabel, { statusType } from '../../../components/StatusLabel';
import { Link } from 'react-router-dom';
import GenericTable, { columnType } from '@/components/GenericTable';
import { FC } from 'react';

export interface IRowData {
  id: number;
  status: statusType;
  name: string;
  duration: number;
}
const ColumnDefinition: columnType<IRowData>[] = [
  {
    name: 'status',
    displayName: 'Status',
    type: 'custom',
    width: 30,
    content: row => <StatusLabel type={row.data.status} />,
  },
  {
    name: 'name',
    displayName: 'Name',
    type: 'custom',

    content: row => (
      <Link
        to={`jobs/${row.data.id}`}
        className="hover:underline text-blue-200"
      >
        {row.data.name}
      </Link>
    ),
  },
  {
    name: 'duration',
    displayName: 'Duration',
    type: 'custom',
    content: row => <p className="text-white text-lg">{row.data.duration} s</p>,
  },
];

interface JobsTableProps {
  rows: IRowData[];
}

const JobsTable: FC<JobsTableProps> = ({ rows }) => {
  return <GenericTable columns={ColumnDefinition} data={rows} />;
};

export default JobsTable;
