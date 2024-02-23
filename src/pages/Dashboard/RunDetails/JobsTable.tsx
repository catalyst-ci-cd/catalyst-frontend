import StatusLabel, { statusType } from '../../../components/StatusLabel';
import { Link } from 'react-router-dom';
import GenericTable, { columnType } from '@/components/GenericTable';
import { FC } from 'react';

export interface IRowData {
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

interface JobsTableProps {
  rows: IRowData[];
}

const JobsTable: FC<JobsTableProps> = ({ rows }) => {
  return <GenericTable columns={ColumnDefinition} data={rows} />;
};

export default JobsTable;
