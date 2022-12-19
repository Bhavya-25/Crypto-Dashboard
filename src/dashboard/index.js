import Layouts from "../layouts"
import * as React from "react";
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { Box, Stack, Card, IconButton, CardHeader, CardActions, Typography, Grid, Divider } from "@mui/material";


const styles = {
    card: {
        background: 'transparent',
        width: "25%"
    },
    stack: {
        border: '1px solid',
        borderRadius: '10px',
       
    },

};

const Dashboard = () => {
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
                {[0, 1, 2, 3].map((value) => (
                    // <Stack item after style={styles.sideLine} xs={3} sx={{ width: "25%" }} >
                        <Card key={value} item style={styles.card}  >

                            <CardHeader
                                sx={{
                                    fontWeight: '400',
                                    fontSize: '14px',
                                    lineHeight: '143%',
                                    color: "text.secondary"
                                }}
                                avatar={
                                    <StackedBarChartIcon fontSize="small" />
                                }
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }
                                title={
                                    <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
                                        Market Cap
                                    </Typography>
                                }
                                subheader={<Typography sx={{ fontSize: 12 }} color="text.primary" gutterBottom>
                                    14.97B USD
                                </Typography>
                                }
                            />
                            <CardActions sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                marginBottom: '2px'
                            }} >
                                <Typography sx={{ fontSize: 10 }} color="text.secondary" gutterBottom>
                                    Previous<br />
                                    11.97B USD
                                </Typography>
                                <Box
                                    sx={{
                                        height: '24px',
                                        width: '65px',
                                        padding: '2px 4px',
                                        display: 'flex',
                                        justifyContent: 'space-evenly'
                                    }}>
                                    <Typography sx={{ fontSize: 12 }} color="#0BB783">+53%</Typography>
                                    <TrendingUpIcon style={{ color: '#0BB783' }} fontSize="small" />
                                </Box>
                            </CardActions>

                        </Card>

                    // </Stack>

                ))}

            </Stack>




        </div>
    );
}

export default Layouts(Dashboard);