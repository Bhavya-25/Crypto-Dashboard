import Layouts from "../layouts"
import React, { useEffect } from "react";
import MDBCard from "../components/snippets/mdbCard";
import Revenue from "../components/snippets/revenue";
import MarketRevenue from '../components/snippets/marketRevenue'
import RevenueToken from "../components/snippets/revenueToken";
import { useDispatch } from "react-redux";
import { tokenListRequest } from "../Actions/tokenActions";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
   
    useEffect(()=>{
      let session = sessionStorage.getItem('token')
      if (session === null) {
        navigate('/*')
      }
        const getTokenList=async()=>{
             await dispatch(tokenListRequest());
        }

        getTokenList()
    })
    return (
          <>
            <MDBCard />
            <Revenue />
            <MarketRevenue/>
            <RevenueToken/>
          </>

    );
}

export default Layouts(Dashboard);