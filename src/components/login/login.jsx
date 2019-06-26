import React, { Component } from 'react';
import { Form, FormGroup, Input } from 'reactstrap';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email: '',
          password: '',
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
      }
    onChange (e){
        this.setState({[e.target.name]: e.target.value})
       }
    onSubmit(e){
         e.preventDefault();
         // eslint-disable-next-line no-console
         console.log(this.state)
     }
    render() {
        return (
         <div className="card-body"> 
        <h3 className='d-flex justify-content-center'>Sign In to Chef Portfolio</h3>  
        <Form onSubmit={this.onSubmit}>
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
		<Input type="submit" value="Login" className="btn login_btn"/>
		</FormGroup>
        </Form>
        </div>  
        )
    }
}
export default LoginForm;
