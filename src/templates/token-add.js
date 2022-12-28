import React from 'react'
import { Grid } from '@mui/material'
import TokenForm from '../sections/token/tokenForm'
import Layouts from "../layouts";
import { useNavigate } from 'react-router-dom';


const TokenAdd = () => {
  
 const redirect = useNavigate()

  const abc = () => {
    redirect('/token')
  }     

  return (
    <>
    <Grid container spacing={2} sx={{ padding: '48px 24px' }}>
        <TokenForm abc={abc} tokenid="" />
    </Grid>
    </>
  )
}


export default Layouts(TokenAdd)