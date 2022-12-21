
import { Box, List, Toolbar, Divider, IconButton, Card, Button } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer'
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import MainListItems from './listItems';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Logo from '../assets/images/Icon.svg'
import Text from '../assets/images/Text.png'
import AbstractionImage from '../assets/images/Abstraction.svg'




const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open'} )(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: "static",
            whiteSpace: 'nowrap',
            height: '100vh',
            width:"100%",
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.easeOut,
                duration: '0.5s',
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden ',
                marginLeft: 0,
                height: '100vh',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.easeOut,
                    duration: '0.5s',
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);



export default function SideBar(props) {
    const [open, setOpen] = useState(true)
    const toggleDrawer = () => {
        setOpen(!open);
    };
  
    return (

        // <Box sx={{ width:"100%", height: '100%', maxHeight: 1024 }}>
        <Drawer  id='drawer' variant="permanent" open={open} sm={{display:'none'}} style={props.open}>
            <List sx={{
                ml: 2,
                mt: 3,
            }}>
                <Toolbar
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}
                >
                    <Box
                        sx={{
                            mr: 5,
                            ...(!open && {
                                visibility: 'hidden',
                                opacity: 0,
                                position: 'absolute',
                                width: '0',
                                transition: '1s'
                            })
                        }}>
                        <img src={Logo} alt=''></img>

                        <img src={Text} alt=''></img>
                    </Box>


                    <IconButton onClick={toggleDrawer}>
                        <ChevronLeftIcon />
                    </IconButton>
                    <Divider />
                </Toolbar>
                <MainListItems />
            </List>
            <Card sx={{
                width: '187px',
                minHeight: '221px',
                background: '#90caf914',
                borderRadius: '10px',
                margin: '98px 25px',
                overflow: 'initial',
                ...(!open && {
                    display: 'none',
                })
            }}>
                <Box
                    component="img"
                    sx={{
                        margin: '37px 29px',
                        marginTop: '-37px',
                    }}
                    alt=''
                    src={AbstractionImage}>
                </Box>
                <Box>
                    <Button sx={{
                        // padding: '6px 20px',
                        backgroundColor: '#90CAF9',
                        color: 'black',
                        margin: '24px 27px',
                        marginTop: '0',
                        fontfamily: 'Inter',
                        fontStyle: 'normal',
                        fontWeight: '500',
                        fontSize: '14px',
                        lineHeight: '24px',
                        maxWidth: '136px',
                        width: '100%',
                        '&:hover': {
                            backgroundColor: '#42A5F5',

                        }
                    }} varient='contained'
                    >Upgrade Now</Button>
                </Box>
            </Card>
        </Drawer>
        // </Box>
    );
}