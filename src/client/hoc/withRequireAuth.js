import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export const withRequireAuth = (ChildComponent) => {
  class RequireAuth extends Component {
    render() {
      switch (this.props.auth) {
        case false:
          return <Redirect to="/" />;

        case false:
          return (
            <div className="center-align">
              <h5>Unauthenticated</h5>
              <p>You need to login</p>
            </div>
          );

        default:
          return <ChildComponent {...this.props} />;
      }
    }
  }

  const mapStateToProps = ({ auth }) => ({
    auth,
  });

  return connect(mapStateToProps)(RequireAuth);
};
