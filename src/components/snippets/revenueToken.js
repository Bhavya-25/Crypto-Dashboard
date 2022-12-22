import React from "react";
import { Card, Grid , Box} from '@mui/material'
import TableChart from './tableChart'
import MultilpleDougnutChart from './multipleDougnutChart'
import RevenueTokenList from "../../sections/dashboard/revenueTokenList";

const RevenueToken = () => {
    return (
        <Box>
            <Grid container spacing={6} columns={{ xs: '8', sm: '12' }}>
                <RevenueTokenList />
                <Grid item xs={8} sm={6}
                    sx={{
                        maxHeight: '414px',
                        height: '100%'
                    }}>
                    <MultilpleDougnutChart id="container5" />
                </Grid>
            </Grid>
        </Box>
    )

};

export default RevenueToken;
