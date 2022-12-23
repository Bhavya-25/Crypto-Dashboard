import React from "react";
<<<<<<< HEAD
import {  Grid } from '@mui/material'
=======
import { Card, Grid ,Box} from '@mui/material'
import TableChart from './tableChart'
>>>>>>> 7606231bf95b6e89a226cdcd847b6f8bec485b99
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
