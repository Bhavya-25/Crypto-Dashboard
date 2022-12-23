import React from "react";
import { Grid} from "@mui/material";
import Layouts from "../layouts";
import TokenForm from "../sections/token/tokenForm";


const Token = () => {

  return (
    <>
    <Grid container spacing={2} sx={{ padding: '48px 24px' }}>
        <TokenForm />
      </Grid>
    </>
  )
}

export default Layouts(Token);