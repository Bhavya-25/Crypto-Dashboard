import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Typography, Grid, TableContainer, Table, TableBody, TablePagination, Tooltip, IconButton,Button

} from "@mui/material";

import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';

import useTable, { emptyRows } from "../../hooks/useTable";
import Iconify from "../../components/Iconify";
import { TableHeadCustom, TableEmptyRows, TableSelectedActions } from "../../components/table";
import TokenListTableRow from "./tokenListTablerow";
import TokenForm from "./tokenForm";

import { useNavigate, Link } from "react-router-dom";


function createData(name, fullName, networks, confirmations, decimals, tokenType, image, status,_id) {
  return { name, fullName, networks, confirmations, decimals, tokenType, image, status,_id };
}

const headCells = [
  {
    id: 'name',
    disablePadding: false,
    label: 'Coin',
  },
  {
    id: 'fullName',
    numeric: false,
    disablePadding: true,
    label: 'FullName',
  },
  {
    id: 'networks',
    numeric: false,
    disablePadding: true,
    label: 'Networks',
  },
  // {
  //   id: 'confirmations',
  //   numeric: false,
  //   disablePadding: true,
  //   label: 'Confirmations',
  // },
  // {
  //   id: 'decimals',
  //   numeric: false,
  //   disablePadding: false,
  //   label: 'Decimals',
  // },
  {
    id: 'tokenType',
    disablePadding: false,
    label: 'Token Type',
  },
  {
    id: 'image',
    disablePadding: false,
    label: 'Image',
  },
  {
    id: 'status',
    disablePadding: false,
    label: 'Status',
  },

];


const TokenUsersList = () => {
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
  const [open, setOpen] = useState(false)
  const [tokenid, setTokenid]= useState();

  const tokensList = useSelector((state) => state.tokenList);
  

  const redirect = useNavigate();

  useEffect(() => {
    let alluser = [];
    for (const token of tokensList) {
      alluser.push(createData(token.coinName, token.fullName, token.networks, token.confirmations, token.decimals, token.tokenType, token.image, token.status, token._id));
    }
    setList(alluser);
  }, [setList, tokensList])


  const abc = (status, tokenId) => {
    redirect(`/token/edit/${tokenId}`)
  }

  const handleDeleteRows = (selected) => {
    const deleteRows = list.filter((row) => !selected.includes(row.userid));
    setSelected([]);
    setList(deleteRows);
  };

  const handleDeleteRow = (id) => {
    const deleteRow = list.filter((row) => row.id !== id);
    setSelected([]);
    setList(deleteRow);
  };

  return (
    <>
    
      <Link
      component="button"
      to="/token/add-new"
      variant="body2"
      onClick={() => {
        console.info("I'm a button.");
      }}
    >
      Button Link <PlaylistAddIcon />
    </Link>

      {
        !open &&

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
            <Typography
              sx={{ flex: '1 1 100%', fontsize: '20px' }}

              id="tableTitle"
              component="div"
            >
              All Users
            </Typography>

            <Table size={dense ? 'small' : 'medium'}>
              <TableHeadCustom
                order={order}
                orderBy={orderBy}
                headLabel={headCells}
                rowCount={list.length}
                onSelectAllRows={(checked) =>
                  onSelectAllRows(
                    checked,
                    list.map((row) => row.userid)
                  )
                }
              />

              <TableBody>
                {list.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                  <TokenListTableRow
                    key={row.userid}
                    row={row}
                    selected={selected.includes(row.userid)}
                    onSelectRow={() => onSelectRow(row.userid)}
                    onDeleteRow={() => handleDeleteRow(row.userid)}
                    abc={abc}
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

      }
      {open &&
        <TokenForm abc={abc} tokenid={tokenid} />
      }
    </>
  )
}

export default TokenUsersList;