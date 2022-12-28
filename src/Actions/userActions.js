import * as api from '../API'
import { USERLIST, USERUPDATE } from '../constants'
import { logOut } from './authActions';

// /**
//  * Admin Login
//  * @param {*} formData 
//  * @returns 
//  */
export const userListRequest = () => async (dispatch) => {
  try {
    const { data } = await api.userListRequestApi();

    if (data.status === 200) {
      await dispatch({ type: USERLIST, payload: data })
      return data;
    }
    else {
      if(data.data === "unauthorized user" && data.status === 404){
        await dispatch(logOut()); 
        return data;
      }
    }

  } catch (error) {

  }
}

export const userStatusUpdateRequest = (param) => async (dispatch) => {
  try {
    const { data } = await api.userStatusUpdate(param);

    if (data.status === 200) {
      await dispatch({ type: USERUPDATE, payload: data })
      return data;
    }
    else {
      return data;
    }

  } catch (error) {

  }
}
