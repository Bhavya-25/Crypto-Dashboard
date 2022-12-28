
import {
  Box,
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  MenuItem,
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  IconButton,
  Checkbox as MuiCheckbox,
} from '@mui/material'

import EditIcon from '@mui/icons-material/Edit'



import { useDispatch } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';

import * as yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import network from '../../networks.json'
import React, { useEffect, useState } from 'react'
import {
  tokenListCreate,
  tokenUpdateRequest,
  gettokenbyid,
} from '../../Actions/tokenActions'
import CloseIcon from '@mui/icons-material/Close'
import { getValue } from '@mui/system'
import { clear } from '@testing-library/user-event/dist/clear'
import { useNavigate } from 'react-router-dom';

const tokens = [
  {
    value: 'global',
    label: 'Global',
  },
  {
    value: 'mannual',
    label: 'Mannual',
  },
]

const TokenForm = ({ abc, tokenid }) => {
  // empty data for form

  const redirect = useNavigate()
  
  const [emptyData, SetEmptyData] = useState({
    coinName: '',
    confirmations: 0,
    decimals: 0,
    image: '',
    fullName: '',
    tokenType: '',
    minimum_withdraw: 0,
    networks : {}
  })

  const dispatch = useDispatch()
  const [open, setOpen] = useState({
    '63218947d2e3551816b9b8b0': false,
    '6329776b201dd027dee16342': false,
    '63218707d2e3551816b9b8af': false,
  })

  useEffect(() => { 

    /// fill form when user update request
    if (tokenid != '') {
      ;(async () => {
        let data = await dispatch(gettokenbyid(tokenid))

        let group = {}
        let openField = open

        if(data[0].networks.length > 0){
           data[0].networks.forEach((ele , index) => {
            open[ele.id] = true 

            setValue(ele.id,true);
            setValue(`networks.${ele.id}.abi`,ele?.abi)
            setValue(`networks.${ele.id}.contract`,ele?.contract)
            setValue(`networks.${ele.id}.decimalNum`,ele?.decimalNum)
            setValue(`networks.${ele.id}.fee`,ele?.fee)

              group[ele.id] = {
                abi : ele?.abi,
                contract : ele?.contract,
                decimalNum : ele?.decimalNum,
                fee  : ele?.fee
              }
            
           })
        }   
        data[0].networks = group
        setOpen(openField)
        SetEmptyData(data[0])
        Object.entries(data[0]).forEach(entry => {
          const [key, value] = entry;
          if(key === 'networks') return;
          console.log(key,value);
          setValue(key,value)
        });

      })()
    }
  }, [])




  const schema = yup.object().shape({
    coinName: yup.string().required('This field is required'),
    confirmations: yup.number().positive().typeError('Amount must be a number'),
    decimals: yup.number().positive().typeError('Amount must be a number'),
    image: yup.mixed().required('Image is required'),
    fullName: yup.string().required('This field is required'),
    minimum_withdraw: yup
      .number()
      .positive()
      .typeError('Amount must be a number'),
    tokenType: yup.string().required('This field is required'),
    Binance: yup.object().shape({
      name: yup.string(),
      decimalNum: yup.number().positive(),
      fee: yup.number().positive(),
      contract: yup.string(),
      abi: yup.string(),
    }),
    Ethereum: yup.object().shape({
      name: yup.string(),
      decimalNum: yup.number().positive(),
      fee: yup.number().positive(),
      contract: yup.string(),
      abi: yup.string(),
    }),
    Tron: yup.object().shape({
      name: yup.string(),
      decimalNum: yup.number().positive(),
      fee: yup.number().positive(),
      contract: yup.string(),
      abi: yup.string(),
    }),

    // chooseCb: yup.array().required("Field must have at least 1 item").min(1).nullable(),
  })

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues : emptyData
  })

  const handleChange = (event, feildName) => {
    setOpen((prevalue) => {
      return {
        ...prevalue,
        [feildName]: event.target.checked,
      }
    })
  }

  const [logo, setlogo] = useState(false)

  const changeLogo = () => {
    setlogo(true)
  }

  let submitForm = async (data, e) => {
    e.preventDefault(e)
    // console.log(data)
    // return;

    /**
     * unnecessary  record deleted 
     */
    delete data['6329776b201dd027dee16342'];
    delete data['63218707d2e3551816b9b8af'];
    delete data['63218947d2e3551816b9b8b0'];
    delete data['Binance'];
    delete data['Ethereum'];
    delete data['Tron'];


    data['image'] = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEASABIAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAoACgDAREAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+yO/v7rVLye9vp3uLm4dpHeRiSCxJ2ICSEjQALGiYWNFVV4ArzW3Jtt3bPVUVFJJWS0PjH9t39rXwd+x78E9a8fa0x1HxtrcGoeHfhJ4LtYWvNT8bfEOfTbmXRNKgs0ZZDp1vcLDea3dKSbTTY5BBFcX89lZXXNisRDDUpVJySdny3Taule7t9mP2notle7R2YPC1MXWjThFyXNHns0nZu3LFvectVFa63eyZ/Lz8T/jx/wAF0f2bPFV58WfGPjnXNd0nVLsXeseA7HSfCPjrRdI02a3hu7pI/B1h4X1JfDcNrHIYrS40m+uGja3ea6EKecH+Wo8W5XLFLA1K+Iw+LadvrNGVOnzOzjFzk3T1Tul7l17qblY+2xHAeeU8DLNKWEw2MwEGlL6nXhWqKOvPJQppVbRknFybqJP3mlE/fn/gl1/wUN0r9vX4L3V/4gtLDw98cPh41lpvxS8L2Ftd2VhN9ukvYtG8WaHb3klw8emayNOvLe9sDdXE+kaxZXKOF0y+0O6vvq6NVVE9U3G13G/LJP4ZR8n+Duj4bEUHRadpKMr6StzQlF2lCSWzi0/VWZ+n1jqF7pF5b6jp88ltdW0iyRyROVJwQSjj+OKQDbLE4McqbkdWUkVum4u6dmjFJS9ySvGXT5Pbtv8AqaIIb+v+e3Xr3/kiT8tf+Ch37K2qfHv4p/sW+PdG1K80+b4TfF7UZ9dMOmpq9tJoN/baP4ntZ57S8mfSoJbXxR4E0GK1u9U0670+RtQk07UGFretb3Xz+f1JQp4eEKTnOu6lGE09Kc5KHLzK1nGac/ilCN4pNuTgj67hOjTqVcVWq1406eEVCvUpOOtakpVOaUJ8yanSmqbUYQqTcZSkockKjPxw/aO+Iv7Wfw0tfg7rVx8V/CWpfEjxd8e5dK1j7Tovg8+MF8KNrP8AYfh650/TbDSde0H7DZXUN1beIbttBuXkmv8ASWi1+GzZIa/K8NDA18RisyxOGqRxGHw861OPPGcXiKLlGUqlT2lNNSlFyg4z1ja6qr3l/QGLWb4XL8BkuBx2DlhcXjKeGqVHQ9nUWBxKjOEKNN0Ks4qEasY1eakpQnze/h37j+zv+CQX7OXiH4S/tLft/eMNauraWy8Q+KfAcGjrp2lLpej3A8Q22seNtVn0IRj7Lc6Lpuo6i/hq1uNOkurJr3RNUjF3LJG7H9O4Zx9PGYb2cUnUwtGlCtOFRVYc7rYmmoKabTsqPOracs4taOLf4TxtktXK8X7ec7UcfjMU8PSlSlSqclLDYCrKs4uKtGUsX7Kz5ZKdKomrppfvXK2M9OvOM598g+mecD9Ov0x8XTV2/wAvW5shs9Dz+v8Ajx/9b1oMypqlut7p93AwXeYWkhcqrGO4hHmwSgHAzHKquMFTxgEE5rDE01VoVYP+STi7JuM4q8ZJPrFpM6sFWlQxVGpG9vaRjON2lOnJqM4O3SUW1172dj+Wv9vL4OeL4fi/8MfAen/CPxTJpem+J7PxRoniw6Lc6/pVtrp8eSeJrmdviHdXMd0+gxPqZhsvC2o/2vY6bO1teaboGn3Gi6VZWH43jlLK1isNiHRw8XRrUqUY04+3xEKqqQVOjKFNSnZyjCU+ePu3jUcXOR/RuCxdDOsFl08JTrYrEwxlGvWqyqYh0MLKi6FT2uIU8VLDwcoxlKMPq0pqdpUrxpxv/Rn8DPBGkfD34U+DtF05bWW8k0Sxvdd1WK1sre61bW7xGvNRnvZLSKNp3t7y5ns7dbh57i1tbeK0eeVoC7fqHDuDw2CyfAQoU4QcsLQnWlFR5qlaVNOo6s4q85xm5Rbk2425dLWPwzizH43Mc/zOeKrVqyp4zE08PCcpuFLDqrJUlQpybVOnOCjUSilGXNz6uXM/Sp5QcnOcDn36fh1+uOenQ+y2eJCLirPW/wCH4nxx+3B/wUA+AH7AHwwtfiT8cNX1Oa4168udI8D+AvCtva6n428c6za2jXlxbaLpt1e2Frb6bYR+QdZ8QapeWWjaSbuwt7i7bUNS0uwvtIwc3ZLbd9v67HLNqEOeTsr2XdvXZH8tPxp/4Oh/j/4o1zTofgh8CPAvwu8HWep2d1qn/CW61ffELxh4i0+zu4J5tKW/j07w54f8N2etW0U9hqf2fQNb1azguzJpGtWl5BFdnX2VNxlGTk+aMlde7ZtWTstdH/e+RjHFqE4yUL8slL3no2ndaWem19zN+NP/AAcgt8QI7DxF4Q/ZKg0T4jWfhl9CtL7xb8ZdU8S+BtEvJrmS8vr+y8J6P4K8KXurPe3Jt/Nmudf0y7WztYrNJhzOfmMdwphcxxVLFYmvNulTVKEYRtyrnlOcoNtqE5uWrcZrlSVtmfX5bx3i8owVXB4PDQtWqyqznUnfmfJCnCFTlhF1KdOMbpL2TcpNt62f5eeCP+Cyf/BQbwH8ZvEHxm0j466vPdeK9f07W/Enw41C1trv4Q6lFpkEFjBpMHgCRTpuiWsul2ttpl3qnh+TSvFF9bwpc3mvz6mBfj6HC4LDYOhHD0adqcXKWsm5Oc25Tm5b3lNuT6Xdkkj5TF5tjcbiZ4vE1faVZqEbcqjCMKcVCnCMVtGEEorVuyTk29T+r7/gml/wXO+FX7cni3Tvgn8TPB8fwS+Pup291J4b06HWjrXgH4iPp9oby7tvDOq3sFjqej+Ihbw3d1F4T1WLUDcWdpJJpviDU7kSWUDnS5VzJ3XVPdefZr7n5dTWjio1Xytcs+ivdP0emvkfgt/wcX/FfxV4v/4KCa/8K9f0/VtJ0T4H+DPCPgzw9Z6na3VjbX8+sadP4x1vxNYQ3Col5b3erazNpC6tbB4NRs9AtRBNNDDC1d9KHJTSfxSk7/il+Cfyd7HJXqRlypNSSV9PO9umlluvzP58bkBJXUjGMDbzw23cVOe68L061E/ie/T/AIJyy30KR46nsPbtmoJCgD7J/wCCe+gfGXX/ANtj9l//AIUL4J8SePviXpHxv+G2vaN4d8M2Vxd3Fzb6N4q0zUdXbVJ4V+z6V4dj0e21B/Ems6pNa6PpOhLqOoateWunW9zPGW5tO6a+TVmXTlyTjP8Alkn8k9T/2Q==';
    
    let networks = []

    if(Object.entries(data['networks']).length > 0){
      Object.entries(data['networks']).forEach(entry => {
          const [key, value] = entry;
          if(key === "Binance" || key === "Tron" || key === "Ethereum") return
          networks.push({...value,id:key})
      })
    }

    data['networks'] = networks;
    if(tokenid == ''){
        await dispatch(tokenListCreate(data))
       /** create new record record */
    }else{
       /** update existing record */
       delete data['_id'];
       delete data['updatedAt'];
       delete data['__v'];
       delete data['createdAt'];
       await dispatch(tokenUpdateRequest(tokenid,data)) 

    }
    setTimeout(() => {
      redirect ('/token')
    }, 1000);

     reset();

  }


  const updateValues = (event) => {
      console.log('adasdasdasd',event.target.value)
    //{ ...emptyData, coinName : e.target.value}
  }

  return (
    <Paper
      sx={{
        margin: 'auto',
      }}
    >
      <Box
        component="form"
        px={3}
        py={2}
        maxWidth="750px"
        width="100%"
        alignContent="center"
        onSubmit={handleSubmit(submitForm)}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: '10px 30px',
          }}
        >
          <Typography variant="h6" align="center" margin="dense">
            Token Form
          </Typography>
          <IconButton onClick={() => abc(false)}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Grid container spacing={1}>
          <Grid item xs={12} sm={12}>

          
          <TextField
              id="coinName"
              label="Coin Name"
              fullWidth
              defaultValue={emptyData?.coinName}
              margin="dense"
              {...register('coinName')}
              error={errors.coinName ? true : false}
            />
            <Typography variant="inherit" color="textSecondary">
              {errors.coinName?.message}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              sx={{
                '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
                  display: 'none',
                },
              }}
              type="number"
              id="confirmations"
              defaultValue={emptyData?.confirmations}
              name="confirmations"
              label="Confirmation Number"
              fullWidth
              margin="dense"
              {...register('confirmations')}
              error={errors.confirmations ? true : false}
            />
            <Typography variant="inherit" color="textSecondary">
              {errors.confirmations?.message}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              sx={{
                '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
                  display: 'none',
                },
              }}
              type="number"
              id="decimals"
              name="decimals"
              defaultValue={emptyData?.decimals}
              label="Decimal"
              fullWidth
              margin="dense"
              {...register('decimals')}
              error={errors.decimals ? true : false}
            />
            <Typography variant="inherit" color="textSecondary">
              {errors.decimals?.message}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12}>
            {tokenid !== '' ? (
              <>
                {!logo ? (
                  <>
                    <Typography variant="inherit" color="textSecondary">
                      Change Logo
                    </Typography>
                    <img src={emptyData?.image} />
                    <Button
                      variant="contained"
                      endIcon={<EditIcon />}
                      onClick={changeLogo}
                    >
                      Change Logo
                    </Button>
                  </>
                ) : (
                  <>
                    <TextField
                      id="image"
                      name="image"
                      label="Image"
                      type="file"
                      fullWidth
                      margin="dense"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      onChange={(e) => {
                        setValue('image', e.target.files[0], {
                          shouldValidate: true,
                        })
                      }}
                      error={errors.image ? true : false}
                    />
                  </>
                )}
              </>
            ) : (
              <TextField
                id="image"
                name="image"
                label="Image"
                type="file"
                fullWidth
                margin="dense"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => {
                  setValue('image', e.target.files[0], {
                    shouldValidate: true,
                  })
                }}
                error={errors.image ? true : false}
              />
            )}

            <Typography variant="inherit" color="textSecondary">
              {errors.image?.message}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              id="fullName"
              name="fullName"
              label="Full Name"
              defaultValue={emptyData?.fullName}
              fullWidth
              margin="dense"
              {...register('fullName')}
              error={errors.fullName ? true : false}
            />
            <Typography variant="inherit" color="textSecondary">
              {errors.fullName?.message}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              sx={{
                '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
                  display: 'none',
                },
              }}
              type="number"
              id="minimum_withdraw"
              name="minimum_withdraw"
              label="Minimum Withdraw"
              fullWidth
              margin="dense"
              {...register('minimum_withdraw')}
              error={errors.minimum_withdraw ? true : false}
            />
            <Typography variant="inherit" color="textSecondary">
              {errors.minimum_withdraw?.message}
            </Typography>
          </Grid>

          <Grid item xs={12} sm={12}>
            <TextField
              id="tokenType"
              select
              fullWidth
              margin="dense"
              // value={emptyData.tokenType}
              label="Token Type"
              helperText="Please select your Token Type"
              {...register('tokenType')}
              error={errors.tokenType ? true : false}
            >
              <Typography variant="inherit" color="textSecondary">
                {errors.tokenType?.message}
              </Typography>
              {tokens.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} sm={12}>
            <Box fullWidth margin="dense">
              <FormControl
                component="fieldset"
                variant="standard"
                error={errors.chooseCb ? true : false}
              >
                <FormLabel component="legend">Networks</FormLabel>
                <FormGroup>
                  {network.map((check, index) => { 
                    return (
                      <FormControlLabel
                        key={check.network_id}
                        sx={{ display: 'block' }}
                        label={
                          <Box>
                            { open[check.network_id]  &&  (
                              <Box id={check.Network}>
                                <Grid container spacing={1}>
                                  <Grid item xs={12} sm={3}>
                                    <TextField
                                      sx={{
                                        '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
                                          display: 'none',
                                        },
                                      }}
                                      onChange={(event) => {
                                        setValue(
                                          `networks.${check.network_id}.decimalNum`,
                                          `${event.target.value}`,
                                        )
                                      }}
                                      type="number"
                                      {...register(`networks.${check.network_id}.decimalNum`)}
                                      name={`networks.${check.network_id}.decimalNum`}
                                      required
                                      id={`decimalsnum${index}`}
                                      label="Decimal"
                                      fullWidth
                                      margin="dense"
                                    />
                                  </Grid>
                                  <Grid item xs={12} sm={3}>
                                    <TextField
                                      sx={{
                                        '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
                                          display: 'none',
                                        },
                                      }}
                                      onChange={(event) => {
                                        setValue(
                                          `networks.${check.network_id}.fee`,
                                          `${event.target.value}`,
                                        )
                                      }}
                                      // ref={register}
                                      {...register(`networks.${check.network_id}.fee`)}
                                      name={`networks.${check.network_id}.fee`}
                                      type="number"
                                      required
                                      id={`fee${index}`}
                                      label="fee"
                                      fullWidth
                                      margin="dense"
                                    />
                                  </Grid>
                                  <Grid item xs={12} sm={3}>
                                    <TextField
                                      onChange={(event) => {
                                        setValue(
                                          `networks.${check.network_id}.contract`,
                                          `${event.target.value}`,
                                        )
                                      }}
                                      required
                                      {...register(`networks.${check.network_id}.contract`)}
                                      name={`networks.${check.network_id}.contract`}
                                      id={`contract${index}`}
                                      label="Contract"
                                      fullWidth
                                      margin="dense"
                                    />
                                  </Grid>
                                  <Grid item xs={12} sm={3}>
                                    <TextField
                                      onChange={(event) => {
                                        setValue(
                                          `networks.${check.network_id}.abi`,
                                          `${event.target.value}`,
                                        )
                                      }}
                                      id={`abi${index}`}
                                      required
                                      {...register(`networks.${check.network_id}.contract`)}
                                      name={`networks.${check.network_id}.contract`}
                                      // value={ emptyData.networks.hasOwnProperty(check.network_id) ? emptyData?.networks[check.network_id]?.abi : '' }
                                      label="ABI"
                                      fullWidth
                                      margin="dense"
                                    />
                                  </Grid>
                                </Grid>
                              </Box>
                            )}
                          </Box>
                        }
                        control={
                          <Controller
                            name={check.network_id}
                            control={control}
                            rules={{ required: true }}
                            render={({ field: { value, ...field } }) => {
                              return (
                                <Box
                                  sx={{
                                    display: 'block',
                                  }}
                                >
                                  <MuiCheckbox
                                    {...field}
                                    checked={!!value}
                                    onChange={(event) => {
                                      field.onChange(event)
                                      setValue(
                                        `${check.network_id}.name`,
                                        `${event.target.value}`,
                                      )
                                      handleChange(event, check.network_id)
                                    }}
                                  />
                                  {check.Network}
                                </Box>
                              )
                            }}
                          />
                        }
                      />
                    )
                  })}
                </FormGroup>
              </FormControl>
              <Typography variant="inherit" color="textSecondary">
                {errors.chooseCb?.message}
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Box mt={3}>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Box>
      </Box>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
    </Paper>
  )
}
export default TokenForm
