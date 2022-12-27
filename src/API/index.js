import axios from "axios";
// const baseurl = 'http://ndemo.elp.exchange/api';
const baseurl = 'http://localhost:5000/api';
const ImageUrl = 'http://localhost:5000/document/';
const PdfUrl = 'http://localhost:5000/statement/';

const API = axios.create(
    {
        baseURL: baseurl,
        headers: { 'Content-type': 'application/json' }
    })

const auth = `${sessionStorage.getItem('token')}`;
API.defaults.headers.common['Authorization'] = auth;

export const apiBaseUrl = baseurl;
export const imageBaseUrl = ImageUrl;
export const pdfBaseUrl = PdfUrl;
/** user Auth */

export const loginRequestApi = (formData) => API.post('/user/login', formData)

/**
 * User Request
 * @returns 
 */
export const userListRequestApi = () => API.get('/admin/user/all')
export const userStatusUpdate =(data) => API.post('/admin/user/update', data)

export const marketCoinRequestAPI=()=>API.get('/admin/market/coin')
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
export const tokenListRequestApi=()=>API.get('/admin/token/all')
export const tokenList =(data) => API.post('/admin/token/create', data)
export const tokenUpdate =(data) => API.put('/admin/token/update', data)

