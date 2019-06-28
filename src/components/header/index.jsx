import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './navBar';
import logo from '../../img/logo.jpg';
import './header.css'

const header = () => {
       return (
        <div className='header'>
        <div className="container">
            <div id="branding">
            <Link to="/"><h3><img src={logo} width='50px' alt='logo'/><span className="highlight">Chef Portfolio</span> </h3></Link>
            </div>
             <Nav/>   
        </div>
        </div>
    )
}
export default header;