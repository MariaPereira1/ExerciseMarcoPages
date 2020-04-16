import React, { useState, useLayoutEffect, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import "./styles.less";

const Header = (props) => {
  const [location, setLocation] = useState(props.location.pathname);

  useEffect(() => setLocation(props.location.pathname), [
    props.location.pathname
  ]);

  useLayoutEffect(() => {
    const a = document.querySelector(".selected");
    const b = document.querySelector(".line ");
    if (a?.offsetWidth && b?.style && a?.offsetLeft) {
      b.style.left = `${a.offsetLeft}px`;
      b.style.width = `${a.offsetWidth}px`;
    }
  });

  return (
    <div className="navContainer">
      <div className="line"> </div>
      <div className="nav">
        <Link className={location === "/" ? "selected" : null} to="/">
          Home
        </Link>
        <Link className={location === "/about" ? "selected" : null} to="/about">
          About
        </Link>
        <Link
          className={location === "/contact" ? "selected" : null}
          to="/contact"
        >
          Contact
        </Link>
        <Link
          className={location === "/gallery" ? "selected" : null}
          to="/gallery"
        >
          Gallery
        </Link>
      </div>
    </div>
  );
};

export default withRouter(Header);
