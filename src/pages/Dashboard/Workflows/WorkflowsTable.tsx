import GenericTable, { columnType } from '@/components/GenericTable';
import { FC } from 'react';
import { Link } from 'react-router-dom';

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
  // {
  //   name: 'actions',
  //   displayName: 'Actions',
  //   width: 30,
  //   type: 'custom',
  //   content: () => (
  //     <Tooltip title={'Rerun Job'} arrow>
  //       <IconButton>
  //         <RiLoopLeftFill className="text-white" />
  //       </IconButton>
  //     </Tooltip>
  //   ),
  // },
];

interface WorkflowsTableProps {
  data: IRowData[];
}

const WorkflowsTable: FC<WorkflowsTableProps> = ({ data }) => {
  return <GenericTable columns={ColumnDefinition} data={data} />;
};

export default WorkflowsTable;
