import PropTypes from 'prop-types';
// @mui
import { useTheme } from '@mui/material/styles';
import { Checkbox, TableRow, TableCell, Typography,Avatar } from '@mui/material';
// import Label from '../../components/Label';
// components

UserTableRow.propTypes = {
  row: PropTypes.object,
  selected: PropTypes.bool,
  onEditRow: PropTypes.func,
  onSelectRow: PropTypes.func,
  onDeleteRow: PropTypes.func,
};

export default function UserTableRow({ row, selected, onEditRow, onSelectRow, onDeleteRow }) {
  const theme = useTheme();

  const { userid, name, btc, usdt, status } = row;

  function stringAvatar(name) {
    console.log(name)
    return {
      sx: {
        bgcolor: '#fff',
      },
      children: name.substring(0, 2),
    };
  }

  return (
    <TableRow hover selected={selected}>
      {onSelectRow && 
        <TableCell padding="checkbox">
        <Checkbox checked={selected} onClick={onSelectRow} />
      </TableCell>
      }
      
      <TableCell sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar variant="rounded" alt={userid} {...stringAvatar(name)} sx={{ mr: 2, background:'#3faf86' }} />
        <Typography variant="subtitle2" noWrap>
          {userid}
        </Typography>
      </TableCell>

      <TableCell align="left">{name}</TableCell>

      <TableCell align="left" sx={{ textTransform: 'capitalize' }}>
        {btc}
      </TableCell>
      <TableCell align="left" sx={{ textTransform: 'capitalize' }}>
        {usdt.toFixed(4)}
      </TableCell>
      <TableCell align="left">
        <Typography className='tableActive'
          color={(status === 'Active') ? theme.palette.success.dark : theme.palette.error}
          sx={{ textTransform: 'capitalize', border:'1px sold #fff' }}
        >
          {status}
        </Typography>
      </TableCell>
    </TableRow>
  );
}
