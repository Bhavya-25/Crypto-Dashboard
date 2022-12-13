import * as api from '../API'
import { LOGIN } from '../constants'

/**
 * Admin Login
 * @param {*} formData 
 * @returns 
 */
export const loginRequest = (formData) => async (dispatch) => {
  try {
    const { data } = await api.loginRequestApi(formData);

    if (data.status === 200) {
      sessionStorage.setItem('token', data.access_token);
      await dispatch({ type: LOGIN, payload: data })
      return data;
    }
    else {
      return data;
    }

  } catch (error) {

  }
}