import React from "react";
import { Grid } from '@mui/material'
import LineChart from "../lineChart";
import DougnutChart from '../dougnutChart'

const Revenue = () => {
    return (
        <div
        style={{
            padding:'24px 30px'
        }}>

        <Grid container spacing={6} columns={{ xs:'8', sm: '12' }}
      >
            <Grid item xs={8} sm={8} sx={{
                    border:'1px solid transparent',
                    borderRadius:'10px'
                }}>
                
                     <LineChart/>
                
            </Grid>
            <Grid item xs={8} sm={4}>
                <DougnutChart id="container"/>
            </Grid>
        </Grid>
            </div>

    )

};

export default Revenue;
