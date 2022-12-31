import React, {useEffect} from "react";
import { depositListRequest } from "../Actions/depositActions";
import { Grid} from "@mui/material";
import Layouts from "../layouts";
import { useDispatch } from "react-redux";
import DepositList from "../sections/deposit/depositTableList";
import { useNavigate } from "react-router-dom";

const Deposit = () => {
  const dispatch = useDispatch();
  const navigate= useNavigate();

  useEffect(() => {
    let session = sessionStorage.getItem('token')
    if (session === null) {
      navigate('/*') 
    }
    const getDepositList = async () => {
     await dispatch(depositListRequest());
    }

    getDepositList();
    
  }, [dispatch,navigate]);

  return (
    <>
    <Grid container spacing={2} sx={{ padding: '48px 24px' }}>
        <DepositList />
      </Grid>
    </>
  )
}

export default Layouts(Deposit);