import * as api from '../API'
import { WITHDRAWLIST } from '../constants'

// /**
//  * Withdraw List
//  * @param {*} formData 
//  * @returns 
//  */
export const withdrawListRequest = () => async (dispatch) => {
  try {
    const { data } = await api.withdrawListRequestApi();

    if (data.status === 200) {
      await dispatch({ type: WITHDRAWLIST, payload: data })
      return data;
    }
    else {
      return data;
    }

  } catch (error) {

  }
}


