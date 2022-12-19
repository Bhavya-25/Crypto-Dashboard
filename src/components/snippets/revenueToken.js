import React from "react";
import { Card, Grid } from '@mui/material'
import TableChart from './tableChart'
import MultilpleDougnutChart from './multipleDougnutChart'


const RevenueToken = () => {
    return (
        <div
            style={{
                padding: '24px 30px',
               
            }}>

            <Grid container spacing={6} columns={{ xs:'8', sm: '12' }}
            >
                <Grid item xs={8} sm={6} sx={{
                    border: '1px solid transparent',
                    borderRadius: '10px'
                }}>
                    <Card
                    >
                        <TableChart />
                    </Card>
                </Grid>
                <Grid item xs={8} sm={6}
                sx={{
                    maxHeight:'414px',
                    height:'100%'
                }}>
                            <MultilpleDougnutChart id="container5" />
                </Grid>
            </Grid>
        </div>


    )

};

export default RevenueToken;
