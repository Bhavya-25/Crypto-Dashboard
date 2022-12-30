import { combineReducers } from 'redux';
import users  from './authReducers';
import userList from './userListReducers';
import tokenList from './tokenReducers';
import depositList from './depositReducers';
import withdrawList from './withdrawReducers';
import kycList from './kycReducers';
import orderList from './orderReducers';

export default combineReducers({users, userList,tokenList, depositList, withdrawList, kycList, orderList});
