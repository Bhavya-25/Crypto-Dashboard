import Layouts from "../layouts"
import * as React from "react";
import MDBCard from "../components/snippets/mdbCard";
import Revenue from "../components/snippets/revenue";




const Dashboard = () => {
    return (
          <>
          <MDBCard />
          <Revenue />
          </>

    );
}

export default Layouts(Dashboard);