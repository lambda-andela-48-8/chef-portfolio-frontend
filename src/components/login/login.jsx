import React, { Component } from 'react';
import { Form, FormGroup, Input } from 'reactstrap';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import FlashMessagesList from './../../flash/flashMessagesList';
import ValidateInput from './../../validations/login' 

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email: '',
          password: '',
          errors:{},
          isLoading: false,
          invalid: false,
          redirect: false
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
      }

    onChange (e){
        this.setState({[e.target.name]: e.target.value})
       }

     isValid(){
     const { errors, isValid }= ValidateInput(this.state);
     if(!isValid){
         this.setState({errors})
     }
     return isValid;
    }

    onSubmit(e){
         e.preventDefault();

         if(this.isValid()){
            this.setState({errors:{}, isLoading: true})
            this.props.userLoginRequest(this.state)
            .then(
                ()=>{
                    this.props.addFlashMessage({
                        type: 'success',
                        text: 'You login successfully. Welcome!'
                      });
                    this.setState({ redirect: true })
                },
                (error) => {
                  this.setState({ errors: error.response.data, isLoading: false });
                  const { errors } = this.state;
                  const displayServerError = errors.error;
                  this.props.addFlashMessage({
                    type: 'error',
                    text: `${displayServerError}`
                  });
                }
                
                );
         };
     }

    render() {
        const { errors } = this.state;
        const { redirect } = this.state;

        if (redirect) {
         return <Redirect to='/'/>;
        }
        return (
         <div className="card-body"> 
        <h3 className='d-flex justify-content-center'>Sign In to Chef Portfolio</h3>  
        <Form onSubmit={this.onSubmit}>

    <FormGroup className="input-group">
		<div className="input-group-prepend">
		<span className="input-group-text"><i className="fas fa-user"></i></span>
		</div>
         <Input type="email" className="form-control" name="email" value={this.state.email} onChange={this.onChange} placeholder="Email"/>
        </FormGroup>
        {errors.email && <span className="alerts">{errors.email}
      </span>}

    <FormGroup className="input-group">
		<div className="input-group-prepend">
		<span className="input-group-text"><i className="fas fa-key"></i></span>
		</div>
        <Input type="password" className="form-control" name="password" value={this.state.password} onChange={this.onChange} placeholder="Password"/>
        </FormGroup>
        {errors.password && <span className="alerts">{errors.password}
      </span>}

        <FormGroup className="d-flex justify-content-center ">
		   <Input type="submit" value="Login" disabled={this.state.isLoading || this.state.invalid} className="btn login_btn"/>
		    </FormGroup>
        </Form>
        <FlashMessagesList/>
        </div>  
        )
    }
}

LoginForm.propTypes = {
    userLoginRequest: PropTypes.func.isRequired,
    addFlashMessage : PropTypes.func.isRequired
  };
export default LoginForm;
