import React from "react";
import {  Grid } from '@mui/material'

import MultilpleDougnutChart from './multipleDougnutChart'
import RevenueTokenList from "../../sections/dashboard/revenueTokenList";

const RevenueToken = () => {
    return (
        <div
            style={{
                padding: '24px 30px',

            }}>

            <Grid container spacing={6} columns={{ xs: '8', sm: '12' }}
            >
                <RevenueTokenList />
                <Grid item xs={8} sm={6}
                    sx={{
                        maxHeight: '414px',
                        height: '100%'
                    }}>
                    <MultilpleDougnutChart id="container5" />
                </Grid>
            </Grid>
        </div>


    )

};

export default RevenueToken;
