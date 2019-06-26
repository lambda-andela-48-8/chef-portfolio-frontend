import React, { Component } from 'react';
import { Form, FormGroup, Input } from 'reactstrap';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          lastName: '',
          firstName: '',
          country: '',
          states:'',
          email: '',
          phoneNumber:'',
          password:''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.selectCountry = this.selectCountry.bind(this);
        this.selectRegion = this.selectRegion.bind(this);
      }
    onChange (e){
        this.setState({[e.target.name]: e.target.value})
       }
    onSubmit(e){
         e.preventDefault();
         // eslint-disable-next-line no-console
         console.log(this.state)
     }
     selectCountry (val) {
        this.setState({ country: val });
      }
     
    selectRegion (val) {
        this.setState({ states: val });
      }
    render() {
        return (
         <div className="card-body"> 
         <h3 className='d-flex justify-content-center'>Create New Account</h3> 
        <Form onSubmit={this.onSubmit}>

        <FormGroup className="input-group">
		<div className="input-group-prepend">
		<span className="input-group-text"><i className="fas fa-user"></i></span>
		</div>
        <Input type="text" className="form-control" name="lastName" value={this.state.lastName} onChange={this.onChange} placeholder="Last name" required/>
        </FormGroup>

        <FormGroup className="input-group">
		<div className="input-group-prepend">
		<span className="input-group-text"><i className="fas fa-user"></i></span>
		</div>
        <Input type="text" className="form-control" name="firstName" value={this.state.firstName} onChange={this.onChange} placeholder="First name" required/>
        </FormGroup>

        <FormGroup className="input-group">
		<div className="input-group-prepend">
		<span className="input-group-text"><i className="fas fa-user"></i></span>
		</div>
        <Input type="tel" className="form-control" name="phoneNumber" value={this.state.phoneNumber} onChange={this.onChange} placeholder="+ country code Phone Number" required/>
        </FormGroup>

        <FormGroup className="input-group">
		<div className="input-group-prepend">
		<span className="input-group-text"><i className="fas fa-user"></i></span>
		</div>
        <CountryDropdown defaultOptionLabel="Select a country" value={this.state.country} onChange={this.selectCountry} required/>
        </FormGroup>

        <FormGroup className="input-group">
		<div className="input-group-prepend">
		<span className="input-group-text"><i className="fas fa-user"></i></span>
		</div>
        <RegionDropdown blankOptionLabel="No country selected" defaultOptionLabel="Now select a states/region" country={this.state.country} value={this.state.states} onChange={this.selectRegion} />
        </FormGroup>

        <FormGroup className="input-group">
		<div className="input-group-prepend">
		<span className="input-group-text"><i className="fas fa-user"></i></span>
		</div>
         <Input type="email" className="form-control" name="email" value={this.state.email} onChange={this.onChange} placeholder="Email" required/>
        </FormGroup>

        <FormGroup className="input-group">
		<div className="input-group-prepend">
		<span className="input-group-text"><i className="fas fa-key"></i></span>
		</div>
        <Input type="password" className="form-control" name="password" value={this.state.password} onChange={this.onChange} placeholder="Password" required/>
        </FormGroup>

        <FormGroup className="d-flex justify-content-center ">
		<Input type="submit" value="Sign Up" className="btn login_btn"/>
		</FormGroup>
        </Form>
        </div>  
        )
    }
}
export default LoginForm;
