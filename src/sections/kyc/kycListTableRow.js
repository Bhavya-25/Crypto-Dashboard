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
      <TableCell component="a" href="/dashboard" align="left" sx={{ textTransform: 'capitalize',
     maxWidth: '180px',
     whiteSpace: 'nowrap',
     overflow: 'hidden',
     textOverflow: 'ellipsis',
     textDecoration:'none',
     color:theme.palette.info.dark }}>
        {frontback}
      </TableCell>
      <TableCell align="left">
        <Typography 
          variant="outlined"
          color={(status === true) ? theme.palette.success.dark : theme.palette.error.dark}
          sx={{ textTransform: 'capitalize' }}
        >
          {(status===true)?'Accept':'Reject'}
        </Typography>
      </TableCell>
      <TableCell align="center">
        <Stack direction="row" spacing={2} sx={{justifyContent:'center', fontSize:'13px'}}>
        <Button variant="outlined" sx={{fontSize:'13px'}} color='info'>{status === 'Approve' ? 'Pending' : 'Approve'}</Button>
        <Button variant="outlined" sx={{fontSize:'13px'}} color="error">Reject</Button></Stack>
      </TableCell>
    </TableRow>
  );
}
