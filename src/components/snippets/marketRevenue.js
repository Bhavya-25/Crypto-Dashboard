import React from "react";
import { Card, Grid ,Box} from '@mui/material'
import TableChart from './tableChart'
import MarketOverviewList from "../../sections/dashboard/marketOverviewList";
import RecentlyAddedTokenList from "../../sections/dashboard/recentlyAddedTokenList";

const MarketOverview = () => {
    return (
        <Box>
            <Grid container spacing={6} columns={{ xs: '8', sm: '12' }}
            >
                <MarketOverviewList />
                <RecentlyAddedTokenList />
            </Grid>
        </Box>

    )

};

export default MarketOverview;
