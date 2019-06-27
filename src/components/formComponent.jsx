import React, { Fragment} from 'react';
import { Card, CardHeader, CardFooter, CardBody, CardImg, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import Footer from './../components/footer';
import logo from './../img/logo.jpg'
import './../components/login/login.css';

const FormComponent = (WrappedComponent) => (props) => {
    return (
    <div className='wallpaper'>
    <main className='content'>
    <div classNam='row'>
    <div className='col-md-offset-4'>
    <Container>
    <div className="d-flex justify-content-center">
    <Card className='usercard'>
    <CardBody>
    <CardHeader>
    <div className="d-flex justify-content-center">
    <CardImg src={logo} alt="Card image cap" />
	</div> 
    </CardHeader>
    <Fragment>
    <WrappedComponent {...props} />
    </Fragment>
    <CardFooter>
    <div className="d-flex justify-content-center links">
    <Link to="/" className="links"><i className="fas fa-home"></i> Home</Link> | 
    <Link to="/signup" className="links"><i className="fas fa-plus-circle"></i> Sign Up</Link> | 
    <Link to="/login" className="links"><i className="fas fa-user"></i> Login </Link> 
	</div>
    </CardFooter>
    </CardBody>
    </Card>
    </div>    
    </Container>
    </div>
    </div>
    </main>
    <Footer/>
    </div>
  );
};

export default FormComponent;