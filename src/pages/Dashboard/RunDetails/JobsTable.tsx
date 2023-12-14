import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import StatusLabel, { statusType } from '../StatusLabel';
import { Link } from 'react-router-dom';

interface IRowData {
  id: number;
  status: statusType;
  name: string;
  duration: string;
}

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
              <TableCell>Job</TableCell>
              <TableCell>Duration</TableCell>
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
                    to={`jobs/${row.id}`}
                    className="hover:underline text-blue-200"
                  >
                    {row.name}
                  </Link>
                </TableCell>
                <TableCell>{row.duration}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default JobsTable;
