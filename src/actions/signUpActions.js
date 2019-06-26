import instance from './../config/axios';

const userSignupRequest=(userData)=> {
  return dispatch => {
    return instance.post('auth/signup', userData);
  }
}
export default userSignupRequest;