import React, {useEffect} from "react";
import { withdrawListRequest } from "../Actions/withdrawActions";
import { Grid} from "@mui/material";
import Layouts from "../layouts";
import { useDispatch } from "react-redux";
import WithdrawList from "../sections/withdraw/withdrawTableList";

const Withdraw = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getWithdrawList = async () => {
     await dispatch(withdrawListRequest());
    }

    getWithdrawList();
    
  }, [dispatch]);

  return (
    <>
    <Grid container spacing={2} sx={{ padding: '48px 24px' }}>
        <WithdrawList />
      </Grid>
    </>
  )
}

export default Layouts(Withdraw);