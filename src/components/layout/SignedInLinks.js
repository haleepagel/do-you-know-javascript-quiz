import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/quiz">New Game</NavLink>
      </li>
      <li>
        <NavLink to="/scoreboard">Scoreboard</NavLink>
      </li>
      <li>
        <NavLink to="/">Sign Out</NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          CSS
        </NavLink>
      </li>
    </ul>
  );
};
export default SignedInLinks;
