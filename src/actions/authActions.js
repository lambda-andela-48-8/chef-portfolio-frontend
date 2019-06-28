import instance from '../config/axios';
import setAuthorizationToken from './../utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';
import { SET_CURRENT_USER } from './types';

export const setCurrentUser = (user) =>{
return {
  type: SET_CURRENT_USER,
  user
}
}

export const userLoginRequest=(data)=> {
  return dispatch => {
    return instance.post('auth/login', data)
    .then(res =>{
     const token = res.data.data.token;
     localStorage.setItem('jwt', token);
     setAuthorizationToken(token);
     dispatch(setCurrentUser(jwt.decode(token)));
    });
  }
}

export function logout() {
  return dispatch => {
    localStorage.removeItem('jwt');
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  }
}
