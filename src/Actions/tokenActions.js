import * as api from '../API'

import { TOKENLIST, TOKENLISTCREATE, TOKENSLIST, TOKENUPDATE } from '../constants'

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
