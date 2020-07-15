import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
  const { isAuthenticated, login, logOut } = props.auth;
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <button onClick={isAuthenticated() ? logOut : login}>
            {isAuthenticated() ? "logOut" : "login"}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
