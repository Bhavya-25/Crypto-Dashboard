import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import {
  Typography, Grid, TableContainer, Table, TableBody, TablePagination, Tooltip, IconButton, Box, Button, Menu, MenuItem
} from "@mui/material";

import useTable, { emptyRows } from "../../hooks/useTable";
import Iconify from "../../components/Iconify";
import { TableHeadCustom, TableEmptyRows, TableSelectedActions } from "../../components/table";
import WithdrawTableListRow from "./withdrawTableListRow";
import FilterListIcon from '@mui/icons-material/FilterList';

function createData(coinName, network, createdAt, tx_hash, amount, address, successful) {
  return { coinName, network, createdAt, tx_hash, amount, address, successful };
}

const headCells = [
  {
    id: 'coinName',
    numeric: true,
    disablePadding: false,
    label: 'Coin',
  },
  {
    id: 'network',
    numeric: false,
    disablePadding: true,
    label: 'Network',
  },
  {
    id: 'createdAt',
    numeric: false,
    disablePadding: true,
    label: 'Date',
  },
  {
    id: 'tx_hash',
    numeric: false,
    disablePadding: true,
    label: 'Tx Id',
  },
  {
    id: 'amount',
    numeric: true,
    disablePadding: false,
    label: 'Amount',
  },
  {
    id: 'address',
    numeric: true,
    disablePadding: false,
    label: 'Wallet Address',
    align: 'center'
  },
  {
    id: 'successful',
    numeric: true,
    disablePadding: false,
    label: 'Status',
  },
];


const WithdrawTableList = (props) => {
  const {
    dense,
    page,
    order,
    orderBy,
    rowsPerPage,
    //setPage,
    //
    selected,
    setSelected,
    onSelectRow,
    onSelectAllRows,
    // onSort,
    // onChangeDense,
    onChangePage,
    onChangeRowsPerPage,
  } = useTable();

  const [list, setList] = useState([]);
  const [coinList, setCoinList] = useState([]);
  const withdrawList = useSelector((state) => state.withdrawList);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const tokenList = useSelector((state) => state.tokenList);

  useEffect(() => {
    let alluser = [];

    let coins = [];

    for (const token of tokenList) {
      coins.push(token.coinName)
    }
    setCoinList(coins)



    for (const withdraw of withdrawList) {
      alluser.push(createData(withdraw.coinName, withdraw.network, withdraw.createdAt, withdraw.tx_hash, withdraw.amount, withdraw.address, withdraw.successful));
    }
    setList(alluser);
  }, [setList, withdrawList, tokenList])

  const handleDeleteRows = (selected) => {
    const deleteRows = list.filter((row) => !selected.includes(row.txid));
    setSelected([]);
    setList(deleteRows);
  };

  const handleDeleteRow = (id) => {
    const deleteRow = list.filter((row) => row.id !== id);
    setSelected([]);
    setList(deleteRow);
  };

  const filterData = (e) => {
    if (e === 'All') {
      setList(withdrawList)
      handleClose()
    }
    else {
      const filterRow = withdrawList.filter((row) => (row.coinName === e.e))
      setList(filterRow);
      handleClose()
    }
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid item xs={12}>
      <TableContainer sx={{ minWidth: 335, position: 'relative' }}>
        {selected.length > 0 && (
          <TableSelectedActions
            dense={dense}
            numSelected={selected.length}
            rowCount={list.length}
            onSelectAllRows={(checked) =>
              onSelectAllRows(
                checked,
                list.map((row) => row.id)
              )
            }
            actions={
              <Tooltip title="Delete">
                <IconButton color="primary" onClick={() => handleDeleteRows(selected)}>
                  <Iconify icon={'eva:trash-2-outline'} />
                </IconButton>
              </Tooltip>
            }
          />
        )}
        <Box sx={{
          display: 'flex'
        }}>
          <Typography
            sx={{ flex: '1 1 100%', fontsize: '20px' }}

            id="tableTitle"
            component="div"
          >
            Top Holders
          </Typography>
          <div>
            <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              startIcon={<FilterListIcon />}
            >
              Coin
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={(e) => { filterData("All") }}>All</MenuItem>
              {
                coinList.map((e) => {
                  return (
                    <MenuItem onClick={() => { filterData({ e }) }}>{e}</MenuItem>
                  )
                })
              }
            </Menu>
          </div>

        </Box>

        <Table size={dense ? 'small' : 'medium'}>
          <TableHeadCustom
            order={order}
            orderBy={orderBy}
            headLabel={headCells}
            rowCount={list.length}
            onSelectAllRows={(checked) =>
              onSelectAllRows(
                checked,
                list.map((row) => row.txid)
              )
            }
          />

          <TableBody>
            {list.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <WithdrawTableListRow
                key={row.txid}
                row={row}
                selected={selected.includes(row.txid)}
                onSelectRow={() => onSelectRow(row.txid)}
                onDeleteRow={() => handleDeleteRow(row.txid)}
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
    </Grid>)
}

export default WithdrawTableList;