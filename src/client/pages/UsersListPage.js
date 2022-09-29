import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import { fetchUsersList } from '../store';

class UsersListPage extends Component {
  componentDidMount() {
    if (!this.props.usersList || this.props.usersList.length === 0) {
      this.props.fetchUsersList();
    }
  }

  renderUsers() {
    return this.props.usersList.map((user) => (
      <li key={user.id}>{user.name}</li>
    ));
  }

  getHeadContent() {
    return (
      <Helmet>
        <title>Users App</title>
        <meta property="og:title" content="Users App" />
      </Helmet>
    );
  }

  render() {
    console.log(
      '%c-> developmentConsole: this.props.usersList= ',
      'color:#77dcfd',
      this.props.usersList
    );

    return (
      <div className="center-align">
        {this.getHeadContent()}
        <h5>Here's a big list of users:</h5>
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ usersList: state.usersList });

const loadData = (store) => store.dispatch(fetchUsersList());

export default {
  component: connect(mapStateToProps, { fetchUsersList })(UsersListPage),
  loadData,
};
