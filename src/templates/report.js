import React from "react";
import { Grid} from "@mui/material";
import Layouts from "../layouts";
import ReportList from "../sections/report/reportTableList";

const Report = () => {

  return (
    <>
    <Grid container spacing={2} sx={{ padding: '48px 24px' }}>
        <ReportList />
      </Grid>
    </>
  )
}

export default Layouts(Report);