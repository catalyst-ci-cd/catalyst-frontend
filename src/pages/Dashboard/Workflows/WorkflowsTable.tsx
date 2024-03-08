import GenericTable, { columnType } from '@/components/GenericTable';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { IconButton, Tooltip } from '@mui/material';
import { FaEdit } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
import { deleteSingleWorkflow } from '@/services/WorkflowApi';
import { toast } from 'react-toastify';

export interface IRowData {
  id: string;
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
      <div className="flex  items-center gap-2">
        <Tooltip title={'Edit Workflow'} arrow>
          <IconButton>
            <Link to={`/dashboard/edit-workflow/${row.id}`}>
              <FaEdit className="text-white" />
            </Link>
          </IconButton>
        </Tooltip>
        <Tooltip title={'Delete Workflow'} arrow>
          <IconButton
            onClick={async () => {
              const response = await deleteSingleWorkflow(row.id);
              if (response.status === 'success') {
                toast.success('Workflow deleted successfully');
                // Refresh the table
                window.location.reload();
              } else {
                toast.error(response.error.message);
              }
            }}
          >
            <AiFillDelete className="text-white" />
          </IconButton>
        </Tooltip>
      </div>
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
