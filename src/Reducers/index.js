import { combineReducers } from 'redux';
import users  from './authReducers';
import userList from './userListReducers';
import depositList from './depositReducers';
import withdrawList from './withdrawReducers';
import kycList from './kycReducers';

export default combineReducers({users, userList, depositList, withdrawList, kycList});