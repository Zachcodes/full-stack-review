import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../redux/userReducer';
import { Link } from 'react-router-dom';

function Header(props) {
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
}

function mapStateToProps(state) {
  return state.user;
}

export default connect(
  mapStateToProps,
  { logout }
)(Header);
