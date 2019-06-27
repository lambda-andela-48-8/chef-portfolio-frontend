import React,{Component} from 'react';
import LoginForm from './login';
import FormComponent from './../formComponent';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addFlashMessage }  from './../../actions/flashMessages';
import { userLoginRequest } from './../../actions/authActions';

class LoginComponent extends Component{
    render(){
      const {userLoginRequest, addFlashMessage} = this.props;

      const SignUpItem = FormComponent(LoginForm);
      return (
        <div>
        <SignUpItem userLoginRequest={userLoginRequest} addFlashMessage={addFlashMessage}/>
        </div>
      )
    }
   }

   LoginComponent.propTypes = {
    userLoginRequest: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired
  }

   export default connect(null,{userLoginRequest, addFlashMessage})(LoginComponent);
