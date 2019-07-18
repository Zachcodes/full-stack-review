import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser } from '../redux/userReducer';

class Dashboard extends Component {
  componentDidMount() {
    if (!this.props.user.loggedIn) {
      console.log('running');
      this.props.getUser();
    }
  }

  render() {
    let { loading, user, error } = this.props;
    if (loading) return <div>Loading</div>;
    if (error || !user.loggedIn) return <Redirect to="/login" />;
    return <div>Dashboard</div>;
  }
}

function mapStateToProps(state) {
  return state.user;
}

export default connect(
  mapStateToProps,
  { getUser }
)(Dashboard);
