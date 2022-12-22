import * as api from '../API'
import { KYCLIST } from '../constants'

// /**
//  * Kyc List
//  * @param {*} formData 
//  * @returns 
//  */
export const kycListRequest = () => async (dispatch) => {
  try {
    const { data } = await api.kycListRequestApi();

    if (data.status === 200) {
      await dispatch({ type: KYCLIST, payload: data })
      return data;
    }
    else {
      return data;
    }

  } catch (error) {

  }
}


