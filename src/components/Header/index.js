import React, { Fragment, useState, useEffect } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import request from "../../api";
import {
  logoutUserAction,
  loginUserAction,
  detailsUserAction
} from "../../store/user/actions";
import "./styles.less";

const Header = ({
  location,
  history,
  detailsUser,
  loginUser,
  logoutUser,
  isLogged,
  name
}) => {
  const [, setLocation] = useState(location.pathname);

  useEffect(() => {
    setLocation(location.pathname), [location.pathname];
  }, []);

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (token) {
      request
        .get("/users/me", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then((response) => {
          const { email, name } = response.data;

          detailsUser(email, name);
          loginUser();
        });
    }
  }, []);

  const handleLogoutButton = () => {
    const token = sessionStorage.getItem("token");
    request
      .post(
        "/users/me/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      .finally(() => {
        logoutUser();
        sessionStorage.removeItem("token");
        history.push("/");
      });
  };

  return (
    <header className="header">
      <nav className="nav">
        <NavLink exact activeClassName="selected" to="/">
          Home
        </NavLink>
        <NavLink activeClassName="selected" to="/about">
          About
        </NavLink>
        <NavLink activeClassName="selected" to="/contact">
          Contact
        </NavLink>
        <NavLink activeClassName="selected" to="/gallery">
          Gallery
        </NavLink>
      </nav>
      <div className="user">
        {isLogged ? (
          <div>
            <p className="username">{name}</p>
            <button className="logout-button" onClick={handleLogoutButton}>
              Logout
            </button>
          </div>
        ) : (
          <Fragment>
            <button
              className="login-button"
              onClick={() => history.push("/login")}
            >
              Login
            </button>
            <button
              className="register-button"
              onClick={() => history.push("/register")}
            >
              Register
            </button>
          </Fragment>
        )}
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
  name: state.user.details.name
});

const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => dispatch(logoutUserAction()),
  loginUser: () => dispatch(loginUserAction()),
  detailsUser: (email, name) => dispatch(detailsUserAction(email, name))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
