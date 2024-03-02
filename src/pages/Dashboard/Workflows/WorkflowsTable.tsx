import GenericTable, { columnType } from '@/components/GenericTable';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { IconButton, Tooltip } from '@mui/material';
import { FaEdit } from 'react-icons/fa';

export interface IRowData {
  id: number;
  name: string;
}

const ColumnDefinition: columnType<IRowData>[] = [
  {
    name: 'name',
    displayName: 'Name',
    type: 'custom',

    content: row => (
      <Link to={`${row.id}`} className="hover:underline text-blue-200">
        {row.name}
      </Link>
    ),
  },
  {
    name: 'actions',
    displayName: 'Actions',
    width: 30,
    type: 'custom',
    content: row => (
      <Tooltip title={'Edit Workflow'} arrow>
        <IconButton>
          <Link to={`/dashboard/edit-workflow/${row.id}`}>
            <FaEdit className="text-white" />
          </Link>
        </IconButton>
      </Tooltip>
    ),
  },
];

interface WorkflowsTableProps {
  data: IRowData[];
}

const WorkflowsTable: FC<WorkflowsTableProps> = ({ data }) => {
  return <GenericTable columns={ColumnDefinition} data={data} />;
};

export default WorkflowsTable;
