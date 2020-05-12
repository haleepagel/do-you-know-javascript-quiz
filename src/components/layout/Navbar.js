import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

const Navbar = () => {
  return (
    <nav className="  nav.nav-wrapper.grey.darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          I'm a link from Navbar.js
        </Link>
        <SignedInLinks />
        <SignedOutLinks />
      </div>
    </nav>
  );
};
export default Navbar;