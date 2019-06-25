import React,{Component} from 'react';
import SignUpForm from './signupForm';
import FormComponent from './../formComponent';
import './signup.css';
class SignUpComponent extends Component{
    render(){
      const SignUpItem = FormComponent(SignUpForm);
      return (
        <div>
        <SignUpItem/>
        </div>
      )
    }
   }
   export default SignUpComponent;