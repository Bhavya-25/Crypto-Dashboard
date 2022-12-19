import * as React from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { Box, Grid, Card, IconButton, CardHeader, CardActions, Typography } from "@mui/material";
import Items from "./items";


const styles = {
    card: {
        background: 'transparent',
        width: '100%',      
    },
    stack: {
        border: '1px solid',
        borderRadius: '10px ',   
    },
    divider:{
        width:1,
        height:'100px',
        backgroundColor:'#ffffff8f',
        // marginRight:'10px'
     
        
    }

};
const mdbCard = () => {
    return (
        <div style={{
            padding:'48px 30px',
            // margin:{sm:'40px 20px', md:'48px 30px'}
        }}>

 <Grid container spacing={3} columns={{ xs: 3, sm: 4, md: 8 }} sx={{background:"#000"}}>
                {Items.map((value,index) => (
                    <Grid item xs={3} sm={2} md={2} key={value} sx={{
                     gap:'10px'
                    }}>
                        <div style={{
                            display:'flex',
                            xs:{flexDirection:'column'},
                            alignItems:'center',
                            gap:'24px'
                        }}>
                        <Card key={value} item style={styles.card}  >
                            <CardHeader
                                sx={{
                                    fontWeight: '400',
                                    fontSize: '14px',
                                    lineHeight: '143%',
                                    color: "text.secondary"
                                }}
                                avatar= {value.icon}   
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }
                                title={
                                    <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
                                       {value.title}
                                    </Typography>
                                }
                                subheader={<Typography sx={{ fontSize: 12 }} color="text.primary" gutterBottom>
                                    {value.subHeader}
                                </Typography>
                                }
                            />
                            <CardActions sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                marginBottom: '2px'
                            }} >
                                <Typography sx={{ fontSize: 10 }} color="text.secondary" gutterBottom>
                                    Previous <br/>
                                    <Typography sx={{ fontSize: 10 }} color="text.primary" gutterBottom>
                                  
                                  {value.previous}
                              </Typography>
                                </Typography>
                               
                                <Box
                                    sx={{
                                        padding: '2px 4px',
                                        display: 'flex',
                                        justifyContent: 'space-evenly'
                                    }}>
                                    <Typography sx={{ fontSize: 12 }} color="#0BB783">{value.increment}</Typography>
                                    {value.progressIcon } 
                                </Box>
                            </CardActions>
                        </Card>
                         {index<3 &&
                                 <div className="divide" style={styles.divider}></div>
                         }
               
                       </div>
                        </Grid>
                ))}
                
            </Grid> 
        </div>



    );
}

export default mdbCard;