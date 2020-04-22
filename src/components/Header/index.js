import React, { useState, useEffect } from "react";
import { NavLink, withRouter } from "react-router-dom";
import "./styles.less";

const Header = (props) => {
  const [, setLocation] = useState(props.location.pathname);

  useEffect(() => {
    setLocation(props.location.pathname), [props.location.pathname];
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
        <button
          className="login-button"
          onClick={() => props.history.push("/login")}
        >
          Login
        </button>
      </div>
    </header>
  );
};

export default withRouter(Header);
