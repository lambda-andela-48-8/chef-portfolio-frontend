import React, { Component } from 'react';
import { Form, FormGroup, Input } from 'reactstrap';
import PropTypes from 'prop-types';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import FlashMessagesList from './../../flash/flashMessagesList';
import ValidateInput from './../../validations/signup';

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          lastName: '',
          firstName: '',
          country: '',
          states:'',
          email: '',
          phoneNumber:'',
          password:'',
          password2:'',
          errors:{},
          isLoading: false,
          invalid: false
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.selectCountry = this.selectCountry.bind(this);
        this.selectRegion = this.selectRegion.bind(this);
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
            this.props.userSignUpRequest(this.state)
            .then(
                ()=>{
                    this.props.addFlashMessage({
                        type: 'success',
                        text: 'You signed up successfully. Welcome!'
                      });
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
     selectCountry (val) {
        this.setState({ country: val });
      }
     
    selectRegion (val) {
        this.setState({ states: val });
      }
    render() {
        const { errors } = this.state;
        return (
         <div className="card-body"> 
         <h3 className='d-flex justify-content-center'>Create New Account</h3> 
        <Form onSubmit={this.onSubmit}>

        <FormGroup className="input-group">
		<div className="input-group-prepend">
		<span className="input-group-text"><i className="fas fa-user"></i></span>
		</div>
        <Input type="text" className="form-control" name="lastName" value={this.state.lastName} onChange={this.onChange} placeholder="Last name"/>
        </FormGroup>
        {errors.lastName && <span className="alerts">{errors.lastName}
      </span>}

        <FormGroup className="input-group">
		<div className="input-group-prepend">
		<span className="input-group-text"><i className="fas fa-user"></i></span>
		</div>
        <Input type="text" className="form-control" name="firstName" value={this.state.firstName} onChange={this.onChange} placeholder="First name"/>
        </FormGroup>
        {errors.firstName && <span className="alerts">{errors.firstName}
      </span>}

        <FormGroup className="input-group">
		<div className="input-group-prepend">
		<span className="input-group-text"><i className="fas fa-user"></i></span>
		</div>
        <Input type="tel" className="form-control" name="phoneNumber" value={this.state.phoneNumber} onChange={this.onChange} placeholder="+ country code Phone Number"/>
        </FormGroup>
        {errors.phoneNumber && <span className="alerts">{errors.phoneNumber}
      </span>}

        <FormGroup className="input-group">
		<div className="input-group-prepend">
		<span className="input-group-text"><i className="fas fa-user"></i></span>
		</div>
        <CountryDropdown defaultOptionLabel="Select a country" value={this.state.country} onChange={this.selectCountry}/>
        </FormGroup>
        {errors.country && <span className="alerts">{errors.country}
      </span>}

        <FormGroup className="input-group">
		<div className="input-group-prepend">
		<span className="input-group-text"><i className="fas fa-user"></i></span>
		</div>
        <RegionDropdown blankOptionLabel="No country selected" defaultOptionLabel="Now select a states/region" country={this.state.country} value={this.state.states} onChange={this.selectRegion}/>
        </FormGroup>
        {errors.states && <span className="alerts">{errors.states}
      </span>}

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

        <FormGroup className="input-group">
		<div className="input-group-prepend">
		<span className="input-group-text"><i className="fas fa-key"></i></span>
		</div>
        <Input type="password" className="form-control" name="password2" value={this.state.password2} onChange={this.onChange} placeholder="Confirm Password"/>
        </FormGroup>
        {errors.password2 && <span className="alerts">{errors.password2}
      </span>}
        

        <FormGroup className="d-flex justify-content-center ">
		<Input type="submit" value="Sign Up" disabled={this.state.isLoading || this.state.invalid} className="btn login_btn"/>
		</FormGroup>
        </Form>
      <FlashMessagesList/>
        </div>  
        )
    }
}
SignUpForm.propTypes = {
    userSignUpRequest: PropTypes.func.isRequired,
    addFlashMessage : PropTypes.func.isRequired
  };
// add redirections to user page and same for login

export default SignUpForm;
