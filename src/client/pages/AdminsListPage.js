import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import { fetchAdminsList } from '../store';

import { withRequireAuth } from '../hoc/withRequireAuth';

class AdminsListPage extends Component {
  componentDidMount() {
    if (!this.props.adminsList || this.props.adminsList.length === 0) {
      this.props.fetchAdminsList();
    }
  }

  renderAdmins() {
    return this.props.adminsList.map((admin) => (
      <li key={admin.id}>{admin.name}</li>
    ));
  }

  getHeadContent() {
    return (
      <Helmet>
        <title>Admins App</title>
        <meta property="og:title" content="Admins App" />
      </Helmet>
    );
  }

  render() {
    return (
      <div className="center-align">
        {this.getHeadContent()}
        <h5>Protected list of admins:</h5>
        <ul>{this.renderAdmins()}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ adminsList: state.adminsList });

const loadData = (store) => store.dispatch(fetchAdminsList());

export default {
  component: connect(mapStateToProps, { fetchAdminsList })(
    withRequireAuth(AdminsListPage)
  ),
  loadData,
};
