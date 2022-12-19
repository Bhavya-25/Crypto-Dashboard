import Layouts from "../layouts"
import * as React from "react";
import MDBCard from "../components/snippets/mdbCard";
import Revenue from "../components/snippets/revenue";
import MarketRevenue from '../components/snippets/marketRevenue'
import RevenueToken from "../components/snippets/revenueToken";



const Dashboard = () => {
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