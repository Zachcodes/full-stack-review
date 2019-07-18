import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser } from '../redux/userReducer';
import Posts from './Posts';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: props.user.loggedIn ? false : true
    };
  }
  componentDidMount() {
    if (!this.props.user.loggedIn) {
      this.props.getUser();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.user !== this.props.user) {
      this.setState({ loading: false });
    }
  }
  render() {
    let { user, error } = this.props;
    let { loading } = this.state;
    if (loading) return <div>Loading</div>;
    if (error) return <Redirect to="/login" />;
    return (
      <div>
        <h3>Posts</h3>
        <Posts />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state.user;
}

export default connect(
  mapStateToProps,
  { getUser }
)(Dashboard);
