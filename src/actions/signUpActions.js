import instance from './../config/axios';
import setAuthorizationToken from './../utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';
import { setCurrentUser } from './authActions';


const userSignupRequest=(userData)=> {
  return dispatch => {
    return instance.post('auth/signup', userData)
    .then(res => {
      const token = res.data.data.token;
      localStorage.setItem('jwt', token);
      setAuthorizationToken(token);
      dispatch(setCurrentUser(jwt.decode(token)));
     });
  }
}
export default userSignupRequest;