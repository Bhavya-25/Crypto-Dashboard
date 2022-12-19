import PropTypes from 'prop-types';
// import { useState } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import { Checkbox, TableRow, TableCell, Typography,Button,Stack } from '@mui/material';
import moment from "moment";
// components

// ----------------------------------------------------------------------

KycListTableRow.propTypes = {
  row: PropTypes.object,
  selected: PropTypes.bool,
  onEditRow: PropTypes.func,
  onSelectRow: PropTypes.func,
  onDeleteRow: PropTypes.func,
};





export default function KycListTableRow({ row, selected, onEditRow, onSelectRow, onDeleteRow }){
  const theme = useTheme();

  const { name, userid,created,  email, document, frontback, status } = row;

  return (
    <TableRow hover selected={selected}>
      {onSelectRow && 
        <TableCell padding="checkbox">
        <Checkbox checked={selected} onClick={onSelectRow} />
      </TableCell>
      }
      <TableCell align="left">{name}</TableCell>
      <TableCell>{userid}</TableCell>
      
      <TableCell align="left">{moment(created).format('Y/MM/DD HH:mm:ss')}</TableCell>
      <TableCell align="left">{email}</TableCell>
      <TableCell align="left" sx={{ textTransform: 'capitalize' }}>
        {document}
      </TableCell>
      <TableCell align="left" sx={{ textTransform: 'capitalize' }}>
        {frontback}
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
