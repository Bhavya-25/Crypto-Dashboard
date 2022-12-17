import PropTypes from 'prop-types';
// import { useState } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import { Checkbox, TableRow, TableCell, Typography,Button,Stack } from '@mui/material';
import moment from "moment";
// import Label from '../../components/Label';
// components

// ----------------------------------------------------------------------

UserListTableRow.propTypes = {
  row: PropTypes.object,
  selected: PropTypes.bool,
  onEditRow: PropTypes.func,
  onSelectRow: PropTypes.func,
  onDeleteRow: PropTypes.func,
};

export default function UserListTableRow({ row, selected, onEditRow, onSelectRow, onDeleteRow }){
  const theme = useTheme();

  const { userid, name, created, token, btc, usdt, status } = row;

  return (
    <TableRow hover selected={selected}>
      {onSelectRow && 
        <TableCell padding="checkbox">
        <Checkbox checked={selected} onClick={onSelectRow} />
      </TableCell>
      }
      <TableCell>{userid}</TableCell>
      <TableCell align="left">{name}</TableCell>
      <TableCell align="left">{moment(created).format('Y/MM/DD HH:mm:ss')}</TableCell>
      <TableCell align="left">{token}</TableCell>
      <TableCell align="left" sx={{ textTransform: 'capitalize' }}>
        {btc}
      </TableCell>
      <TableCell align="left" sx={{ textTransform: 'capitalize' }}>
        {usdt}
      </TableCell>
      <TableCell align="left">
        <Typography 
          variant="outlined"
          color={(status === 'Active') ? theme.palette.success.dark : theme.palette.error.dark}
          sx={{ textTransform: 'capitalize' }}
        >
          {status}
        </Typography>
      </TableCell>
      <TableCell align="center">
        <Stack direction="row" spacing={2} sx={{justifyContent:'center'}}>
        <Button variant="outlined">{status === 'Active' ? 'Hold' : 'Active'}</Button>
        <Button variant="outlined" color="error">Block</Button></Stack>
      </TableCell>
    </TableRow>
  );
}
