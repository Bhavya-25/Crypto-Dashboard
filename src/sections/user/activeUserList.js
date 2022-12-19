import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Typography, Grid, TableContainer, Table, TableBody, TablePagination, Tooltip, IconButton
} from "@mui/material";

import useTable, { emptyRows } from "../../hooks/useTable";
import Iconify from "../../components/Iconify";
import { TableHeadCustom, TableEmptyRows,TableSelectedActions } from "../../components/table";
import UserTableRow from "./userTableRow";

function createData(userid, name, btc, usdt, status) {
  return { userid, name, btc, usdt, status };
}

const headCells = [
  {
    id: 'userid',
    numeric: false,
    align: 'left',
    label: 'user ID',
  },
  {
    id: 'name',
    numeric: true,
    align: 'left',
    label: 'Name',
  },
  {
    id: 'btc',
    numeric: true,
    align: 'left',
    label: 'In BTC',
  },
  {
    id: 'usdt',
    numeric: true,
    align: 'left',
    label: 'Holding',
  },
  {
    id: 'status',
    numeric: true,
    align: 'left',
    label: 'Status',
  },
];

const ActiveUserList = () => {
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

  const userList = useSelector((state) => state.userList);

  useEffect(() => {
    let userData = [];
    let activeUser = userList.filter((item) => {
      return item.status === "Active"
    })
    for (const user of activeUser) {
      userData.push(createData(user._id, user.name, 0, user.holding, user.status));
    }
    setList(userData);
  }, [setList, userList])

  return (
    <Grid item xs={12} sm={6}>

          <TableContainer sx={{ minWidth: 800, position: 'relative' }}>
            <Typography
              sx={{ flex: '1 1 100%' }}
              variant="h6"
              id="tableTitle"
              component="div"
            >
              Active Users
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
                  <UserTableRow
                    key={row.userid}
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

export default ActiveUserList;