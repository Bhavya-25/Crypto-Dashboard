import React, {useEffect} from "react";
import { orderListRequest } from "../Actions/orderActions";
import { Grid} from "@mui/material";
import Layouts from "../layouts";
import { useDispatch } from "react-redux";
import OrderList from "../sections/order/orderTableList";

const Order = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getOrderList = async () => {
     await dispatch(orderListRequest());
    }

    getOrderList();
    
    
  }, [dispatch]);

  return (
    <>
    <Grid container spacing={2} sx={{ padding: '48px 24px' }}>
        <OrderList />
      </Grid>
    </>
  )
}

export default Layouts(Order);