import { combineReducers } from 'redux';
import flashMessages from './flashMessages';
import recipes from './recipeReducer';
import auth from './authReducer'

export default combineReducers({
 flashMessages,
 recipes,
 auth
});