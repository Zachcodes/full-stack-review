import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../redux/userReducer';
import { Link } from 'react-router-dom';

const Header = props => {
  console.log(props);
  return (
    <div className="header">
      {props.user.loggedIn ? (
        <button onClick={props.logout} className="btn warning-btn">
          Logout
        </button>
      ) : (
        <span>
          <Link to="/login" className="btn normal-btn">
            Login
          </Link>
          <Link to="/signup" className="btn normal-btn">
            Signup
          </Link>
        </span>
      )}
    </div>
  );
};

const mapStateToProps = state => state.user;

export default connect(mapStateToProps, { logout })(Header);
