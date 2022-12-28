import PropTypes from 'prop-types';
// @mui
import { useTheme } from '@mui/material/styles';
import { Checkbox, TableRow, TableCell, Typography, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

// components

// ----------------------------------------------------------------------

TokenListTableRow.propTypes = {
  row: PropTypes.object,
  selected: PropTypes.bool,
  onEditRow: PropTypes.func,
  onSelectRow: PropTypes.func,
  onDeleteRow: PropTypes.func,
};

export default function TokenListTableRow({ row, selected, onEditRow, onSelectRow, onDeleteRow,abc }){
  const theme = useTheme();


  const { name, fullName, networks, confirmations, decimals, tokenType,image,status,_id } = row;
  console.log("====networks00", networks[0])

    
  return (
    <>
    <TableRow hover selected={selected}>
      {onSelectRow && 
        <TableCell padding="checkbox">
        <Checkbox checked={selected} onClick={onSelectRow} />
      </TableCell>
      }
      <TableCell align="left">{name}</TableCell>
      <TableCell>{fullName}</TableCell>
      <TableCell align="left"></TableCell>
      {/* <TableCell align="left" sx={{ textTransform: 'capitalize' }}>
        {confirmations}
      </TableCell>
      <TableCell align="left">{decimals}</TableCell> */}
      <TableCell align="left">{tokenType} </TableCell>
      <TableCell component="a" href={image} align="left"
      sx={{ textTransform: 'capitalize',
      maxWidth: '180px',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      textDecoration:'none',
      color:theme.palette.info.dark }}>Document</TableCell>
      <TableCell align="left" sx={{ fontSize: '12px' }}>
        <Typography
          variant="outlined"
          color={(status === true) ? theme.palette.success.dark  : theme.palette.error.dark}
          sx={{ textTransform: 'capitalize', fontSize: '14px' }}
        >
         {status === true ? 'Active' : 'InActive'}
        </Typography>
        </TableCell>
        
        <TableCell padding="checkbox">
            <IconButton aria-label="edit" onClick={() => abc(true, _id)  } >
              <EditIcon />
            </IconButton>
            
          </TableCell>
        
          
      
    </TableRow>
    </>
  );
}