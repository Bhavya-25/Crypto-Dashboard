import React,{useEffect} from "react";
import { tokensListRequest } from "../Actions/tokenActions";
import { Grid} from "@mui/material";
import Layouts from "../layouts";
import { useDispatch } from "react-redux";
import TokenUsersList from "../sections/token/tokenUsersList";


const Token = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getTokensList = async () => {
     await dispatch(tokensListRequest());
    }
    
    getTokensList();
    
  }, [dispatch]);

  return (
    <>
    <Grid container spacing={2} sx={{ padding: '48px 24px' }}>
 
        <TokenUsersList  />
    

      </Grid>
    </>
  )
}

export default Layouts(Token);