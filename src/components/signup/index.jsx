import React,{Component} from 'react';
import SignUpForm from './signupForm';
import FormComponent from './../formComponent';
import userSignUpRequest from './../../actions/signUpActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addFlashMessage }  from './../../actions/flashMessages';

class SignUpComponent extends Component{
  static propTypes = {
    prop: PropTypes
}
    render(){
      const {userSignUpRequest, addFlashMessage} = this.props;
      const SignUpItem = FormComponent(SignUpForm);
      return (
        <div>
        <SignUpItem userSignUpRequest={userSignUpRequest} addFlashMessage={addFlashMessage}/>
        </div>
      )
    }
   }

   SignUpComponent.propTypes = {
    userSignUpRequest: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired
  }
   export default connect(null,{userSignUpRequest, addFlashMessage})(SignUpComponent);