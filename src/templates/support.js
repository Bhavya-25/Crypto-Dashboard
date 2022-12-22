import React from "react";
import { Grid} from "@mui/material";
import Layouts from "../layouts";
import SupportUsersList from "../sections/support/supportUsersList";
import Cards from "../sections/support/cards";

const Support = () => {

  return (
    <>
      <Cards />
      <Grid container spacing={2} sx={{ padding: '0px 24px' }}>
        <SupportUsersList />
      </Grid>
    </>
  )
}

export default Layouts(Support);