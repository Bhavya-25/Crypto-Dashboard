import React, {useEffect} from "react";
import { depositListRequest } from "../Actions/depositActions";
import { Grid} from "@mui/material";
import Layouts from "../layouts";
import { useDispatch } from "react-redux";
import DepositList from "../sections/deposit/depositTableList";

const Deposit = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getDepositList = async () => {
     await dispatch(depositListRequest());
    }

    getDepositList();
    
  }, [dispatch]);

  return (
    <>
    <Grid container spacing={2} sx={{ padding: '48px 24px' }}>
        <DepositList />
      </Grid>
    </>
  )
}

export default Layouts(Deposit);