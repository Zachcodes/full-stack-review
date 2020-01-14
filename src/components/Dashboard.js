import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser } from '../redux/userReducer';
import Posts from './Posts';

class Dashboard extends Component {
  componentDidMount() {
    if (!this.props.user.loggedIn) {
      this.props.getUser();
    }
  }

  render() {
    const { user, error, redirect } = this.props;
    if (error || redirect) return <Redirect to="/login" />;
    if (!Object.keys(user).length) return <div>Loading</div>;
    return (
      <div className="display-container">
        <h3>Posts</h3>
        <Posts />
      </div>
    );
  }
}

const mapStateToProps = state => state.user;

export default connect(mapStateToProps, { getUser })(Dashboard);
