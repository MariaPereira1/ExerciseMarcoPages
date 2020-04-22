import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import "./styles.less";

const Header = ({ history }) => {
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
        <button className="login-button" onClick={() => history.push("/login")}>
          Login
        </button>
      </div>
    </div>
  );
};

export default withRouter(Header);
