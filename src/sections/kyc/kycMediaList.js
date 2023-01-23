import * as React from 'react';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import { Card, CardHeader, CardContent, IconButton, CardMedia, TextField, Grid, Box, Typography } from '@mui/material';
import { imageBaseUrl } from '../../API';
import { pdfBaseUrl } from '../../API';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import CloseIcon from '@mui/icons-material/Close'
import { useNavigate } from 'react-router-dom';

export default function KycMediaList() {

  const params = useParams();
  const [list, setList] = useState([]);
  const kycList = useSelector((state) => state.kycList);
  const navigate = useNavigate()

  const createKyc=React.useCallback(()=>{
    let alluser = [];
    for (const kyc of kycList) {
      if (params.userid === kyc.userid) {

        alluser.push(kyc);
      }

    }
    setList(alluser);
  },[kycList, params.userid])

  console.log("=====list", list);
  useEffect(() => {
    createKyc()
  }, [createKyc])

  const handleClose = () => {
      navigate('/kyc')
  }

  return (
    <Card sx={{
      maxWidth: '750px',
      width: '100%',
      alignContent: 'center',
      margin: 'auto',
      marginTop: '20px'

    }}>

      <CardHeader
        title={
          <Typography component="h1" variant='h4' color='textG.main'>
            Kyc Media Details
          </Typography>
        }
        action={
          <IconButton aria-label="close" onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        }
      />
      <CardContent>
        {list.map((media, index) => {
          return (
            <Box>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={6}>
                  <TextField

                    id="standard-read-only-input"
                    InputProps={{
                      readOnly: true,
                    }}
                    label="Full Name"
                    fullWidth
                    margin='dense'
                    defaultValue={media.name}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField

                    id="standard-read-only-input"
                    InputProps={{
                      readOnly: true,
                    }}
                    fullWidth
                    margin='dense'
                    label="Email"
                    defaultValue={media.email}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField

                    id="standard-read-only-input"
                    InputProps={{
                      readOnly: true,
                    }}
                    fullWidth
                    margin='dense'
                    label="Document Type"
                    defaultValue={media.doctype}
                  />

                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="standard-read-only-input"
                    InputProps={{
                      readOnly: true,
                    }}
                    fullWidth
                    margin='dense'
                    label="Document Number"
                    defaultValue={media.docnumber}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CardMedia
                    component="img"
                    fullWidth
                    // width='200'
                    height="140"
                    image={imageBaseUrl + media.idfront}
                    alt="green iguana"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CardMedia
                    component="img"
                    fullWidth
                    // width='200'
                    height="140"
                    image={imageBaseUrl + media.idback}
                    alt="green iguana"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  Bank Statement
                  <IconButton href={pdfBaseUrl + media.media[0].file} target="_blank" rel="Bank Statement">
                    <PictureAsPdfIcon sx={{
                      width: 160,
                      height: 160,
                    }} />
                  </IconButton>

                </Grid>

              </Grid>
            </Box>
          )

        })}


      </CardContent>
    </Card>
  );
}