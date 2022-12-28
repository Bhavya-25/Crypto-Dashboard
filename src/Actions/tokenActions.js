import * as api from '../API'

import { TOKENLIST, TOKENLISTCREATE, TOKENSLIST, TOKENUPDATE, GETTOKENBYID } from '../constants'

export const tokenListRequest = () => async (dispatch) => {
  try {
    const { data } = await api.marketCoinRequestAPI();

    if (data.status === 200) {
      await dispatch({ type: TOKENLIST, payload: data })
      return data;
    }
    else {
      return data;
    }

  } catch (error) {

  }
}


export const tokensListRequest = () => async (dispatch) => {
  try {
    const { data } = await api.tokenListRequestApi();
    if (data.status === 200) {
      await dispatch({ type: TOKENSLIST, payload: data })
   
      return data;
    }
    else {
      return data;
    }

  } catch (error) {

  }
}

export const tokenListCreate = (params) => async (dispatch) => {
  try {
    const { data } = await api.tokenList(params);

    if (data.status === 200) {
      await dispatch({ type: TOKENLISTCREATE, payload: data })
      return data;
    }
    else {
      return data;
    }

  } catch (error) {

  }
}


export const tokenUpdateRequest = (param) => async (dispatch) => {
  try {
    const { data } = await api.tokenUpdate(param);

    if (data.status === 200) {
      await dispatch({ type: TOKENUPDATE, payload: data })
      return data;
    }
    else {
      return data;
    }

  } catch (error) {

  }
}


/**
 * Get token by specific id
 */


export const gettokenbyid =  (tokedis) => async (dispatch) => {
  try {
    const {data} = await api.tokenGetById(tokedis)

    console.log(data,' ===========');

    if (data.status === 200) {
      await dispatch({ type: GETTOKENBYID, payload: data })
      return data;
    }
    else {
      return data;
    }

  } catch (error) {
     console.log('error')
  }
} 