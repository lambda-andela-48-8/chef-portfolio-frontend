import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.jpg';
import './header.css'

const header = () => {
       return (
        <div className='header'>
        <div className="container">
            <div id="branding">
                <h1><img src={logo} width='50px' alt='logo'/><span className="highlight">Chef Portfolio</span> </h1>
            </div>
            <nav>
                <ul>
                    <li><i className="fas fa-home"></i><Link to="/">Home</Link></li>
                    <li><i className="fas fa-home"></i><Link to="/login">Login</Link></li>
                    <li><i className="fas fa-plus-circle"></i><Link to="/signup">Sign Up</Link></li>
                    <li><i className="fas fa-plus-circle"></i><Link to="/user">View My Page</Link></li>
                    <li><i className="fas fa-plus-circle"></i><Link to="/create_recipe">Create Recipe Gist</Link></li>
                </ul>
            </nav>
        </div>
        </div>
    )
}
export default header;