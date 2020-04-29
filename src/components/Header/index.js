import React, { useState, useEffect } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "./styles.less";

const Header = ({ location, history, isLogged, username }) => {
  const [, setLocation] = useState(location.pathname);

  useEffect(() => {
    setLocation(location.pathname), [location.pathname];
  }, []);

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
            <p className="username">{username}</p>
            <button className="logout-button" onClick={() => history.push("/")}>
              Logout
            </button>
          </div>
        ) : (
          <button
            className="login-button"
            onClick={() => history.push("/login")}
          >
            Login
          </button>
        )}
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
  username: state.user.details.username
});

export default withRouter(connect(mapStateToProps)(Header));
