import axios from "axios";
// const baseurl = 'http://ndemo.elp.exchange/api';
const baseurl = 'http://localhost:5000/api';

const API = axios.create(
    {
        baseURL: baseurl,
        headers: { 'Content-type': 'application/json' }
    })

const auth = `${sessionStorage.getItem('token')}`;
API.defaults.headers.common['Authorization'] = auth;

export const apiBaseUrl = baseurl;
/** user Auth */

export const loginRequestApi = (formData) => API.post('/user/login', formData)

/**
 * User Request
 * @returns 
 */
export const userListRequestApi = () => API.get('/admin/user/all')
export const userStatusUpdate =(data) => API.post('/admin/user/update', data)

export const marketCoinRequestAPI=()=>{
    let sauth = sessionStorage.getItem('token');
    API.defaults.headers.common['Authorization'] = sauth;
    return API.get('/admin/market/coin')
}
/**
 * Deposit Requests
 */
export const depositListRequestApi = () => API.get('/admin/deposit/all')

/**
 * Withdraw Requests
 */
export const withdrawListRequestApi = () => API.get('/admin/withdraw/all')

/**
 * Kyc Requests
 */
export const kycListRequestApi = () => API.get('/admin/kyc/all')

/**
 * Token List Requests
 */
export const tokenList =(data) => API.post('/admin/token/create', data)

