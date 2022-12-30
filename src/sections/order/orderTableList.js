import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import {
    Typography, Grid, TableContainer, Table, TableBody, TablePagination, Tooltip, IconButton, Box, Button, Menu, MenuItem
} from "@mui/material";
import FilterListIcon from '@mui/icons-material/FilterList';
import useTable, { emptyRows } from "../../hooks/useTable";
import Iconify from "../../components/Iconify";
import { TableHeadCustom, TableEmptyRows, TableSelectedActions } from "../../components/table";
import OrderTableListRow from "./orderTableListRow";


function createData(postid, currency, createdAt, order_amount, quantity, price, token, isComplete, isCanceled, inProcess) {
    return { postid, currency, createdAt, order_amount, quantity, price, token, isComplete, isCanceled, inProcess };
}


const headCells = [
    {
        id: 'postid',
        numeric: true,
        disablePadding: false,
        label: 'Post Id',
    },
    {
        id: 'currency',
        numeric: false,
        disablePadding: true,
        label: 'Currency',
    },
    {
        id: 'createdAt',
        numeric: false,
        disablePadding: true,
        label: 'Date',
    },
    {
        id: 'order_amount',
        numeric: false,
        disablePadding: true,
        label: 'Order Amount',
    },
    {
        id: 'quantity',
        numeric: true,
        disablePadding: false,
        label: 'Quantity',
    },
    {
        id: 'price',
        numeric: true,
        disablePadding: false,
        label: 'Price'
    },
    {
        id: 'token',
        numeric: true,
        disablePadding: false,
        label: 'Token',
    },
    {
        id: 'isComplete',
        numeric: true,
        disablePadding: false,
        label: 'Complete',
    },
    {
        id: 'isCanceled',
        numeric: true,
        disablePadding: false,
        label: 'Cancel',
    },
    {
        id: 'inProcess',
        numeric: true,
        disablePadding: false,
        label: 'Process',
    },
];


const OrderTableList = (props) => {
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
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const orderList = useSelector((state) => state.orderList);

    useEffect(() => {
        let alluser = [];
        for (const order of orderList) {
            alluser.push(createData(order.postid, order.currency, order.createdAt, order.order_amount, order.quantity, order.price, order.token, order.isComplete, order.isCanceled, order.inProcess));
        }
        setList(alluser);
    }, [setList, orderList])

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

    const filterData = (status) => {
        if (status === 'All') {
            setList(orderList)
            handleClose()
        }
        else {
            const filterRow = orderList.filter((row) => (row[status] === true))
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
                        Top Orders
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
                            Status
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
                            <MenuItem onClick={(e) => { filterData("inProcess") }}>Process</MenuItem>
                            <MenuItem onClick={(e) => { filterData("isComplete") }}>Complete</MenuItem>
                            <MenuItem onClick={(e) => { filterData("isCanceled") }}>Cancel</MenuItem>
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
                            <OrderTableListRow
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

export default OrderTableList;