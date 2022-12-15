import React, { useEffect, useState } from "react";
import { Card, Box, Grid, CardContent } from '@mui/material'
import Highcharts from 'highcharts/highstock';
import variablePie from "highcharts/modules/variable-pie.js";

import DougnutChart from '../dougnutChart'
import TableChart from './tableChart'

variablePie(Highcharts);

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
