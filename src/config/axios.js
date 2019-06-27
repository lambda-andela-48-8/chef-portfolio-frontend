import axios from 'axios';

const instance = axios.create({
    baseURL:'https://chef-portfolio-production.herokuapp.com/api/'
})

export default instance;