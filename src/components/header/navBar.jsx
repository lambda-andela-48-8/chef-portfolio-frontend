/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from './../../actions/authActions';

class NavigationBar extends React.Component {
  logout(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    const isAuthenticated  = this.props.auth;
    let username;
    if(isAuthenticated){
        username = this.props.user.name.toUpperCase();
    }
    

    const userLinks = (
      <ul> 
        <li>Welcome, {username}</li>
        <li><i className="fas fa-plus-circle"></i><Link to="/user">View My Page</Link></li> 
        <li><i className="fas fa-plus-circle"></i><Link to="/create_recipe">Create Recipe Gist</Link></li>
        <li><i className="fas fa-plus-circle"></i><a href="#" onClick={this.logout.bind(this)}>Logout</a></li>
      </ul>
    );

    const guestLinks = (
      <ul>
        <li><i className="fas fa-home"></i><Link to="/">Home</Link></li>
        <li><i className="fas fa-home"></i><Link to="/login">Login</Link></li>
        <li><i className="fas fa-plus-circle"></i><Link to="/signup">Sign Up</Link></li>
      </ul> 
    );

    return (
          <nav>
            { isAuthenticated ? userLinks : guestLinks }
          </nav>
    );
  }
}


function mapStateToProps({auth}) {
  return {
    auth: auth.isAuthenticated,
    user: auth.user
  };
}

export default connect(mapStateToProps, { logout })(NavigationBar);