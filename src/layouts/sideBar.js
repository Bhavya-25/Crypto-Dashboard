import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';
import { mainListItems } from './listItems';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Logo from './images/logo/Icon.svg'
import Text from './images/logo/Text.png'
import AbstractionImage from './images/logo/Abstraction.svg'
import Button from '@mui/material/Button'
const drawerWidth = 240;


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);

const mdTheme = createTheme();

export default function SideBar() {
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <ThemeProvider >
            <Box sx={{ display: 'flex', backgroundColor: '#ffffff'}}>

                <Drawer variant="permanent" open={open}>
                    <Toolbar
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            px: [1],
                        }}
                    >
                        <img src={Logo} alt =''></img>
                        <img src={Text} alt =''></img>
                        <IconButton onClick={toggleDrawer}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </Toolbar>
                    <Divider />
                    <List component="nav">
                        {mainListItems}
                    </List>
                    <Divider/>
                    <Card sx={{
                        width: '190px',
                        height: '180px',
                        backgroundColor: 'grey',
                        borderRadius: '10px',
                        opacity: '0.6',
                        marginTop:'53px',
                        
                    }}>
                        
                        {/* <Button variant="contained">Upgrade Now</Button> */}

                    </Card>
                    <Box
                    component="img"
                    sx={{
                      height: 190,
                      width: 211,
                      marginTop:'-223px',
                      opactity:'0,5',
                      zIndex:'1',
                      backgroundColor:'grey'
                    }}
                    alt=''
                    src={AbstractionImage}>

                    </Box>
                 
                </Drawer>





            </Box>
        </ThemeProvider>
    );
}


