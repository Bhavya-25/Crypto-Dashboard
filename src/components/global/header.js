import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Avatar from '@mui/material/Avatar';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: '10.5px 20px 10.5px 45px',
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
    backgroundColor:'transparent',
    border: '1px solid rgba(255, 255, 255, 0.23)',
    borderRadius:'8px',
    fontFamily: 'Public Sans',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0.15px'
  },
}));

const Header = (props)=>{
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  console.log(isMobileMenuOpen)
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ padding:"30px 20px 20px" }}>
        <Toolbar sx={{ padding:"0 !important" }}>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 , display:{md: 'block', lg: 'none'} }} >
          <MenuIcon onClick={props.handleDrawerOpen} />
        </IconButton>
          <Box sx={{  display:{xs: 'none',md: 'none', lg: 'flex'},flexDirection:'column'}}>
            <Typography
                variant="h3"
                noWrap
                component="h3"
            >
                Dashboard Analysis
            </Typography>
            <Typography
                variant="subtitle1"
                noWrap
                color={(theme) => theme.palette.textG.light}
            >
            With all of the styling tool options available in today's market
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display:"flex" , gap:{xs:'20px',md:'30px'} ,alignItems:'center'  }}>
          <IconButton size="large" aria-label="search" color="inherit" sx={{ display:{ xs: 'block',md:'none'} }}>
            <SearchIcon />
          </IconButton>
            <Search sx={{
              display:{xs: 'none',md:"block"},
              '&:hover':{
                background:"transparent",
              }
              }}>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"

            >
              <Badge variant="dot" color='activeColor' >
                
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <ListItemAvatar sx={{ display: {xs: 'flex', md: 'flex',lg:'none' } ,justifyContent: 'end' }}>
              <Avatar alt="Profile Picture" src={require('../../assets/images/Avatar.jpg')} />
            </ListItemAvatar>
            <Button sx={{ display: { xs: 'none', md: 'none',lg:'block' } }} color="textLight" variant="text">
                <ListItem sx={{ cursor:'pointer' }}  >
                    <ListItemAvatar>
                        <Avatar alt="Profile Picture" src={require('../../assets/images/Avatar.jpg')} />
                    </ListItemAvatar>
                    <Box>
                      <Box>
                        <Typography variant="subtitle1" color={(theme) => theme.palette.secondry.light}>Allie Grater</Typography>
                      </Box>
                      <Box>
                        <Typography variant="subtitle2" color={(theme) => theme.palette.textG.light}>Admin</Typography>
                      </Box>
                    </Box>
                    <KeyboardArrowDownIcon color="#000" sx={{ marginLeft:"30px" }} />
                </ListItem>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
  )
}

export default Header;