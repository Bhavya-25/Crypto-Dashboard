import React from "react";
import { Card, Grid } from '@mui/material'
import DougnutChart from '../dougnutChart'
import TableChart from './tableChart'


const RevenueToken = () => {
    return (
        <div
            style={{
                padding: '24px 30px'
            }}>

            <Grid container spacing={6} columns={12}
            >
                <Grid item xs={6} sx={{
                    border: '1px solid transparent',
                    borderRadius: '10px'
                }}>
                    <Card
                    >
                        <TableChart />
                    </Card>
                </Grid>
                <Grid item xs={6}>


                    <Grid container spacing={1} >

                        <Grid item xs={4}>
                            <DougnutChart id="container5" />
                        </Grid>

                        <Grid item xs={4}>
                            <DougnutChart id="container6" />
                        </Grid>
                        <Grid item xs={4}>
                            <DougnutChart id="container7" />
                        </Grid>

                    </Grid>

                </Grid>
            </Grid>
        </div>


    )

};

export default RevenueToken;
