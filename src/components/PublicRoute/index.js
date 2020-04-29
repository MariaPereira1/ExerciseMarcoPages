import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./styles.less";

const PublicRoute = ({
  path = "/",
  exact = false,
  component = null,
  isLogged
}) => {
  if (!isLogged) {
    return <Route path={path} exact={exact} component={component} />;
  }

  return <Redirect to="/" />;
};

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged
});

export default connect(mapStateToProps)(PublicRoute);
