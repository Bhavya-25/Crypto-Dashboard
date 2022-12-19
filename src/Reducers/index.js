import { combineReducers } from 'redux';
import users  from './authReducers';
import userList from './userListReducers';

export default combineReducers({users, userList});