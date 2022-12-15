import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Table} from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
// import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MarketData from './marketData';


export default function TableChart() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
          <TableRow>
              <TableCell align="left" colSpan={4}>
              Market Overview
              </TableCell>
              <TableCell align="right" colSpan={4}>
              <MoreVertIcon />
              </TableCell>
            </TableRow>
            <TableRow>
              {MarketData[0].columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 53 }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {MarketData[1].rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {MarketData[0].columns.map((column) => {
                      const value = row[column.id];
                      console.log('====value', value)
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {value}

                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={MarketData.rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
    </Paper>
  );
}