import React from "react";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";
import "./styles.less";

const Header = ({ history, isLogged, username }) => {
  return (
    <div className="header">
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
            <button className="logout-button">Logout</button>
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
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
  username: state.user.details.username
});

export default withRouter(connect(mapStateToProps)(Header));
