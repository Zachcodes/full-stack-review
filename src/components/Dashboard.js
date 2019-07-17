import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      user: {},
      redirect: false
    };
  }
  async componentDidMount() {
    try {
      let { data } = await axios.get('/api/dashboard');
      this.setState({ user: data, loading: false });
    } catch (err) {
      this.setState({ loading: false, redirect: true });
    }
  }

  render() {
    let { loading, user, redirect } = this.state;
    if (loading) return <div>Loading</div>;
    if (redirect) return <Redirect to="/login" />;
    return <div>Dashboard</div>;
  }
}

export default Dashboard;
