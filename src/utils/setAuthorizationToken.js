import Axios from 'axios';

const setAuthorizationzationToken = (token) =>{
if(token){
Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}
delete Axios.defaults.headers.common['Authorization'];
};
export default  setAuthorizationzationToken;