import { combineReducers } from 'redux';
import flashMessages from './flashMessages';
import auth from './authReducer'

export default combineReducers({
 flashMessages,
 auth
});