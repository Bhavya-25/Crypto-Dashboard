import * as api from '../API'
import { USERLIST } from '../constants'

/**
 * Admin Login
 * @param {*} formData 
 * @returns 
 */
export const userListRequest = () => async (dispatch) => {
  try {
    const { data } = await api.userListRequestApi();

    if (data.status === 200) {
      await dispatch({ type: USERLIST, payload: data })
      return data;
    }
    else {
      return data;
    }

  } catch (error) {

  }
}