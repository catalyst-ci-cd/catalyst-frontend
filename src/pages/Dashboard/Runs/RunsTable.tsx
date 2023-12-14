import { RiLoopLeftFill } from 'react-icons/ri';
import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
} from '@mui/material';
import StatusLabel, { statusType } from '../StatusLabel';
import { Link } from 'react-router-dom';

interface IRowData {
  id: number;
  status: statusType;
  name: string;
  workflow: string;
  duration: string;
  finished_at: string;
}

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
  return (
    <div className="rounded-md my-2 bg-secondary p-3 border border-solid border-tertiary shadow-xl shadow-secondary">
      <TableContainer
        sx={{
          '& .MuiTableCell-root': {
            color: 'white',
            textAlign: 'center',
            border: 0,
          },
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead
            sx={{
              '& .MuiTableCell-head': {
                fontSize: '1.3rem',
              },
            }}
          >
            <TableRow className="border-b border-solid border-tertiary">
              <TableCell width={30}>Status</TableCell>
              <TableCell>Run</TableCell>
              <TableCell>Workflow</TableCell>
              <TableCell>Duration</TableCell>
              <TableCell width={30}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="[&>.MuiTableRow-root:last-child]:border-0 [&>.MuiTableRow-root]:border-b [&>.MuiTableRow-root]:border-solid [&>.MuiTableRow-root]:border-primary">
            {rows.map(row => (
              <TableRow key={row.id}>
                <TableCell>
                  <StatusLabel type={row.status} />
                </TableCell>
                <TableCell>
                  <Link
                    to={`runs/${row.id}`}
                    className="hover:underline text-blue-200"
                  >
                    {row.name}
                  </Link>
                </TableCell>
                <TableCell>
                  <Link
                    to={`workflows/${row.workflow}`}
                    className="hover:underline text-blue-200"
                  >
                    {row.workflow}
                  </Link>
                </TableCell>
                <TableCell>{row.duration}</TableCell>
                <TableCell>
                  <Tooltip title={'Rerun Job'} arrow>
                    <IconButton>
                      <RiLoopLeftFill className="text-white" />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default RunsTable;
