import * as api from '../API'

import { TOKENLIST } from '../constants'

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