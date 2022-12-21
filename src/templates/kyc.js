import React, { useEffect } from "react";
import { Grid} from "@mui/material";
import Layouts from "../layouts";
import KycUsersList from "../sections/kyc/kycUsersList";
import TopCard from "../sections/kyc/topCard";
import { kycListRequest } from "../Actions/kycActions";
import { useDispatch } from "react-redux";


const Kyc = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getKycList = async () => {
     await dispatch(kycListRequest());
    }

    getKycList();
    
  }, [dispatch]);

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