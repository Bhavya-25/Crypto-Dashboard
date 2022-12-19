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


// export const userListRequestApi = () => API.get('/admin/user/all')