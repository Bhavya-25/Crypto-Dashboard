import React, {  useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Grid} from "@mui/material";
import Layouts from "../layouts";
import useTable from '../hooks/useTable';
import KycUsersList from "../sections/kyc/kycUsersList";
import TopCard from "../sections/kyc/topCard";


const Kyc = () => {

  return (
    <>
      <TopCard />

      <Grid container spacing={2} sx={{ padding: '0px 24px' }}>
        <KycUsersList />
      </Grid>
    </>
  )
}

export default Layouts(Kyc);