import React, { useEffect } from "react";
import {  Grid ,Box} from '@mui/material'
import MarketOverviewList from "../../sections/dashboard/marketOverviewList";
import RecentlyAddedTokenList from "../../sections/dashboard/recentlyAddedTokenList";
import { tokenRecentCoinRequest } from "../../Actions/tokenActions";
import { useDispatch } from "react-redux";

const MarketOverview = () => {

    const dispatch = useDispatch();
    useEffect(()=>{
 
          const getRecentAddCoin = async()=>{
            await dispatch(tokenRecentCoinRequest())
          }
  
          getRecentAddCoin()
      })
    return (
        <Box>
            <Grid container spacing={6} columns={{ xs: '8', sm: '12' }} sx={{ marginTop:"0px" }} >
                <MarketOverviewList />
                <RecentlyAddedTokenList />
            </Grid>
        </Box>

    )

};

export default MarketOverview;
