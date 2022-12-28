import * as api from '../API'
import { KYCLIST, KYCUPDATE } from '../constants'

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

export const kycStatusUpdateRequest = (param) => async (dispatch) => {
  try {
    const { data } = await api.kycStatusUpdate(param);

    if (data.status === 200) {
      await dispatch({ type: KYCUPDATE, payload: data })
      return data;
    }
    else {
      return data;
    }

  } catch (error) {

  }
}


