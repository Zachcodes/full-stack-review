import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../redux/userReducer';

function Header(props) {
  console.log(props);
  return (
    <div className="header">
      {props.user.loggedIn ? (
        <button onClick={props.logout}>Logout</button>
      ) : null}
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
