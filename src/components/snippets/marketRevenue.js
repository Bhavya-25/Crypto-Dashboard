import React, { useEffect, useState } from "react";
import { Card, Box, Grid } from '@mui/material'
import Highcharts from 'highcharts/highstock';
import variablePie from "highcharts/modules/variable-pie.js";
import LineChart from "../lineChart";
import DougnutChart from '../dougnutChart'
import TableChart from './tableChart'

variablePie(Highcharts);

const MarketOverview = () => {
    return (
        <div
        style={{
            padding:'24px 30px'
        }}>

        <Grid container spacing={6} columns={12}
      >
            <Grid item xs={8} sx={{
                    border:'1px solid transparent',
                    borderRadius:'10px'
                }}>
                <Card
                >
                     <TableChart/>
                   </Card>
            </Grid>
            <Grid item xs={4}>
                <Card>
                <TableChart/>
                </Card>
            </Grid>
        </Grid>
            </div>

    )

};

export default MarketOverview;
