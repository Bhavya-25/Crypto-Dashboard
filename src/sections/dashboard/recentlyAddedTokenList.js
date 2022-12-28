import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Typography, Grid, TableContainer, Table, TableBody, TablePagination,
} from "@mui/material";

import useTable, { emptyRows } from "../../hooks/useTable";
import { TableHeadCustom, TableEmptyRows } from "../../components/table";
import RecentlyAddedTableRow from "./recentlyAddedTableRow";

function createData(name, price, added) {
  return { name, price,added };
}

const headCells = [
  { id: 'token', label: 'Token', align: 'left', },
  { id: 'price', label: 'Price', align: 'left', },
  {
    id: 'added',
    label: 'Added',
    align: 'left',
  }
];

const RecentlyAddedTokenList = () => {
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
      tokenData.push(createData(token.FROMSYMBOL, token.PRICE, token.CREATEDAT));
    }
    setList(tokenData);

  }, [setList, tokenList])

  return (
    <Grid item xs={8} sm={4} sx={{
      border: '1px solid transparent',
      borderRadius: '20px',
      marginBottom:"30px",
    }}>

      <TableContainer sx={{ maxHeight: 350, overflowX: 'overflow', justifyContent: 'space-between', fontSize: '20px' }}>
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableMarketOverview"
          component="div"
          
        >
          Market Overview
        </Typography>

        <Table size={dense ? 'small' : 'medium'} sx={{ padding:"24px"}}>
          <TableHeadCustom
            order={order}
            orderBy={orderBy}
            headLabel={headCells}
            rowCount={list.length}
          />

          <TableBody>
            {list.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <RecentlyAddedTableRow
                key={row.id}
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

    </Grid>
  )
}

export default RecentlyAddedTokenList;