import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <ul className="header-parent">
      <div className="header-name">
        <h3>{props.branding}</h3>
      </div>
      <div className="header-items">
        <li>
          <Link to="/">
            <i className="fas fa-home" /> Home
          </Link>
        </li>
        <li>
          <Link to="/add">
            <i className="fas fa-plus" /> Add
          </Link>
        </li>
        <li>
          <Link to="/about">
            <i className="fas fa-question" /> About
          </Link>
        </li>
      </div>
    </ul>
  );
}

export default Header;
