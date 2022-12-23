import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Typography, Grid, TableContainer, Table, TableBody, TablePagination, Card
} from "@mui/material";

import useTable, { emptyRows } from "../../hooks/useTable";
import { TableHeadCustom, TableEmptyRows } from "../../components/table";
import RevenueTokenTableRow from "./revenueTokenTableRow";

function createData(name, revenue,change) {
  return { name, revenue,change };
}

const headCells = [
  { id: 'token', label: 'Token', align: 'left', },
  { id: 'revenue', label: 'Revenue', align: 'left', },
  {
    id: 'change',
    label: 'Change',
    align: 'left',
  },
  { id: 'graph', label: 'Graph', align: 'left', },
];

const RevenueTokenList = () => {
  const {
    dense,
    page,
    order,
    orderBy,
    rowsPerPage,
    onChangePage,
    onChangeRowsPerPage,
  } = useTable();

  const [list, setList] = useState([]);

  const tokenList = useSelector((state) => state.tokenList);

  useEffect(() => {
    let tokenData = [];

    for (const token of tokenList) {
      tokenData.push(createData(token.FROMSYMBOL, token.PRICE, token.CHANGE24HOUR));
    }
    setList(tokenData);

  }, [setList, tokenList])

  return (
    <Grid item xs={8} sm={6} sx={{
      border: '1px solid transparent',
      borderRadius: '10px'
  }}>
      <Card>
          <TableContainer sx={{ maxHeight: 350, overflowX: 'overflow', justifyContent: 'space-between', fontSize: '20px' }}>
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableMarketOverview"
          component="div"
        >
          Market Overview
        </Typography>

        <Table size={dense ? 'small' : 'medium'}>
          <TableHeadCustom
            order={order}
            orderBy={orderBy}
            headLabel={headCells}
            rowCount={list.length}
          />

          <TableBody>
            {list.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <RevenueTokenTableRow
                key={row.name}
                row={row}
              />
            ))}
            <TableEmptyRows height={72} emptyRows={emptyRows(page, rowsPerPage, list.length)} />
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={list.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={onChangePage}
        onRowsPerPageChange={onChangeRowsPerPage}
      />
      </Card>

      

    </Grid>
  )
}

export default RevenueTokenList;