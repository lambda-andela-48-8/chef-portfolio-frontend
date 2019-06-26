import React,{Component} from 'react';
import LoginForm from './login';
import FormComponent from './../formComponent';

class LoginComponent extends Component{
    render(){
      const SignUpItem = FormComponent(LoginForm);
      return (
        <div>
        <SignUpItem/>
        </div>
      )
    }
   }
   export default LoginComponent;