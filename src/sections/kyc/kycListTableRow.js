import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import { useState } from 'react';
// @mui
import PreviewIcon from '@mui/icons-material/Preview';
import { useTheme } from '@mui/material/styles';
import { Checkbox, TableRow, TableCell, Typography,Button,Stack, IconButton } from '@mui/material';
import moment from "moment";
import Kycmedia from '../../templates/kycMedia';
// components

// ----------------------------------------------------------------------

KycListTableRow.propTypes = {
  row: PropTypes.object,
  selected: PropTypes.bool,
  onEditRow: PropTypes.func,
  onSelectRow: PropTypes.func,
  onDeleteRow: PropTypes.func,
};





export default function KycListTableRow({ row, selected, onEditRow, onSelectRow, onDeleteRow, preview }){
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
      <TableCell component='a' onClick={() => preview(true)  } align="left" sx={{ textTransform: 'capitalize',
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
      <TableCell>
      <IconButton aria-label="edit" component={Link} to={`/kyc/media/${userid}`}>
      
                  <PreviewIcon onClick={()=>preview(userid)}/>
                  
                </IconButton>
                </TableCell>
    </TableRow>
  );
}
