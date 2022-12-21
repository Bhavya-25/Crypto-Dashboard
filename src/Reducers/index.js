import { combineReducers } from 'redux';
import users  from './authReducers';
import userList from './userListReducers';
import tokenList from './tokenReducers';

export default combineReducers({users, userList, tokenList});