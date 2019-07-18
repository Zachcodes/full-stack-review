import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../redux/userReducer';

function Header(props) {
  return (
    <div className="header">
      <button onClick={props.logout}>Logout</button>
    </div>
  );
}

export default connect(
  null,
  { logout }
)(Header);
