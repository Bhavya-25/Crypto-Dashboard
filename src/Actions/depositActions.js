import * as api from '../API'
import { DEPOSITLIST } from '../constants'

// /**
//  * Deposit List
//  * @param {*} formData 
//  * @returns 
//  */
export const depositListRequest = () => async (dispatch) => {
  try {
    const { data } = await api.depositListRequestApi();

    if (data.status === 200) {
      await dispatch({ type: DEPOSITLIST, payload: data })
      return data;
    }
    else {
      return data;
    }

  } catch (error) {

  }
}


