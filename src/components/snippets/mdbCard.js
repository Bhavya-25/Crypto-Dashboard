import * as React from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, Stack, Card, IconButton, CardHeader, CardActions, Typography, Divider } from "@mui/material";
import Items from "./items";


const styles = {
    card: {
        background: 'transparent',
        width: "25%",      
    },
    stack: {
        border: '1px solid',
        borderRadius: '10px ',   
    },

};
const mdbCard = () => {
    return (
        <div style={{
            padding:'48px 30px'
        }}>

            <Stack sx={{ flexGrow: 1 }} container
                direction="row"
                divider={<Divider orientation="vertical" flexItem
                    sx={{
                        height: "90px",
                        position: 'relative',
                        alignSelf: "center"
                        
                    }}
                />}
                spacing={1}
                style={styles.stack}
            >
                {Items.map((value) => (
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
                                        height: '24px',
                                        width: '65px',
                                        padding: '2px 4px',
                                        display: 'flex',
                                        justifyContent: 'space-evenly'
                                    }}>
                                    <Typography sx={{ fontSize: 12 }} color="#0BB783">{value.increment}</Typography>
                                    {value.progressIcon} 
                                </Box>
                            </CardActions>
                        </Card>
                ))}
            </Stack>
        </div>



    );
}

export default mdbCard;