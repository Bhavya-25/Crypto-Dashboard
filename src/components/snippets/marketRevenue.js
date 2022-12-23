import React from "react";
import {  Grid } from '@mui/material'
import MarketOverviewList from "../../sections/dashboard/marketOverviewList";
import RecentlyAddedTokenList from "../../sections/dashboard/recentlyAddedTokenList";

const MarketOverview = () => {
    return (
        <div
            style={{
                padding: '24px 30px'
            }}>
            <Grid container spacing={6} columns={{ xs: '8', sm: '12' }}
            >
                <MarketOverviewList />
                <RecentlyAddedTokenList />
            </Grid>
        </div>

    )

};

export default MarketOverview;
