import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userListRequest } from "../Actions/userActions";
import {
  Box, Stack, Typography, Card, CardContent, Slider, Grid, Divider,
  ListItem, ListItemText, TableContainer, Table, TableBody, TablePagination
} from "@mui/material";

import Layouts from "../layouts";
import DougnutChart from "../components/dougnutChart";
import MapChart from "../components/mapChart";

import { TableHeadCustom, TableEmptyRows } from "../components/table";
import UserTableRow from "../sections/user/userTableRow";
import useTable, { emptyRows } from '../hooks/useTable';
import AllUserList from "../sections/user/allUserList";
import TopCard from "../sections/user/topCard";


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


const Users = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [allUsers, setAllUsers] = useState([])
  const [activeUsers, setActiveUsers] = useState([])

  const {
    dense,
    page,
    order,
    orderBy,
    rowsPerPage,
    onChangePage,
    onChangeRowsPerPage,
  } = useTable();

  useEffect(() => {
    let session = sessionStorage.getItem('token')
    if (session === null) {
      navigate('/')
    }
    const getUserList = async () => {
      let users = await dispatch(userListRequest());
      if (users.status === 200) {
        
        setAllUsers(users.data);

        let activeUser = users.data.filter((item) => {
          return item.status === "Active"
        })

        let filteruser = [];
        for (const user of activeUser) {
          filteruser.push(createData(user._id.substring(0, 6) + '....', 'surinder', 0, 0, user.status));
        }
        setActiveUsers(filteruser);
      }
      console.log(users);
    }

    getUserList();

  }, [dispatch, navigate]);

  
  return (
    <>
      <TopCard allUsers={allUsers} activeUsers={activeUsers}/>

      <Grid container spacing={2} sx={{ padding: '0px 24px' }}>
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
                rowCount={activeUsers.length}
              />

              <TableBody>
                {activeUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                  <UserTableRow
                    key={row.userid}
                    row={row}
                  />
                ))}
                <TableEmptyRows height={72} emptyRows={emptyRows(page, rowsPerPage, activeUsers.length)} />
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={activeUsers.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={onChangePage}
            onRowsPerPageChange={onChangeRowsPerPage}
          />

        </Grid>
        <Grid item xs={12} sm={6}>

          <TableContainer sx={{ minWidth: 800, position: 'relative' }}>
            <Typography
              sx={{ flex: '1 1 100%' }}
              variant="h6"
              id="tableTitle"
              component="div"
            >
              Top Holder
            </Typography>

            <Table size={dense ? 'small' : 'medium'}>
              <TableHeadCustom
                order={order}
                orderBy={orderBy}
                headLabel={headCells}
                rowCount={activeUsers.length}
              />

              <TableBody>
                {activeUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                  <UserTableRow
                    key={row.userid}
                    row={row}
                  />
                ))}
                <TableEmptyRows height={72} emptyRows={emptyRows(page, rowsPerPage, activeUsers.length)} />
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={activeUsers.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={onChangePage}
            onRowsPerPageChange={onChangeRowsPerPage}
          />

        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ padding: '0px 24px' }}>
        <AllUserList allUsers={allUsers}/>
      </Grid>
      <Grid container spacing={2} sx={{ padding: '0px 24px' }}>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ minWidth: '30%', textAlign: 'center' }}>
            <CardContent>
              <MapChart />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ minWidth: '30%', textAlign: 'center' }}>
            <CardContent>
              <DougnutChart id="pie-chart" />
            </CardContent>

          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ minWidth: '30%', textAlign: 'center' }}>
            <CardContent>
              <Stack direction="column">
                <Box>
                  <Typography>Traffice Resources</Typography>
                </Box>
                <Box>
                  <Grid container>
                    <Grid item xs>
                      <ListItem>
                        <ListItemText primary="Total Users" secondary="5,000" />
                      </ListItem>
                    </Grid>
                    <Divider orientation="vertical" flexItem>
                    </Divider>
                    <Grid item xs>
                      <ListItem>
                        <ListItemText primary="New Users" secondary="10" />
                      </ListItem>
                    </Grid>
                  </Grid>
                </Box>
                <Box>
                  <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
                    <Typography sx={{ textAlign: 'start' }}> From Direct</Typography>
                    <Typography sx={{ textAlign: 'end' }}> 50%</Typography>
                  </Stack>

                  <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
                </Box>
                <Box>

                  <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
                    <Typography sx={{ textAlign: 'start' }}>Affiliate</Typography>
                    <Typography sx={{ textAlign: 'end' }}> 50%</Typography>
                  </Stack>
                  <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
                </Box>
                <Box>

                  <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
                    <Typography sx={{ textAlign: 'start' }}>Referral</Typography>
                    <Typography sx={{ textAlign: 'end' }}> 50%</Typography>
                  </Stack>
                  <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
                </Box>
                <Box>

                  <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
                    <Typography sx={{ textAlign: 'start' }}>Marketing</Typography>
                    <Typography sx={{ textAlign: 'end' }}> 50%</Typography>
                  </Stack>
                  <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
                </Box>
              </Stack>

            </CardContent>

          </Card>
        </Grid>
      </Grid>
    </>
  )
}

export default Layouts(Users);