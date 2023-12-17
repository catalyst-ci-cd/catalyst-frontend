import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { ReactNode } from 'react';

export type columnType<T> =
  | {
      name: string;
      displayName: string;
      width?: number;
      type: 'text';
    }
  | {
      name: string;
      displayName: string;
      width?: number;
      type: 'custom';
      content: (data: T) => ReactNode;
    };
interface GenericTableProps<T> {
  columns: columnType<T>[];
  data: T[];
}

function GenericTable<T>({ columns, data }: GenericTableProps<T>) {
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
              {columns.map(column => (
                <TableCell key={column.name} width={column.width}>
                  {column.displayName}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody className="[&>.MuiTableRow-root:last-child]:border-0 [&>.MuiTableRow-root]:border-b [&>.MuiTableRow-root]:border-solid [&>.MuiTableRow-root]:border-primary">
            {data.map((row, index) => (
              <TableRow key={index}>
                {columns.map(column =>
                  column.type === 'text' ? (
                    <TableCell>
                      {row[column.name as keyof T] as ReactNode}
                    </TableCell>
                  ) : (
                    <TableCell>{column.content(row)}</TableCell>
                  ),
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default GenericTable;
