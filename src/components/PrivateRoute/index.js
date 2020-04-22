import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({
  path = "/",
  exact = false,
  component = null,
  isLogged
}) => {
  return isLogged ? (
    <Route path={path} exact={exact} component={component} />
  ) : (
    <Redirect to="/login" />
  );
};

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged
});

export default connect(mapStateToProps)(PrivateRoute);
