import React from "react";
import { Card, Grid } from '@mui/material'
import LineChart from "../lineChart";
import DougnutChart from '../dougnutChart'

const Revenue = () => {
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
                     <LineChart/>
                   </Card>
            </Grid>
            <Grid item xs={4}>
                <Card>
                <DougnutChart id="container"/>
                </Card>
            </Grid>
        </Grid>
            </div>

    )

};

export default Revenue;
