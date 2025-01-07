import React from "react";
import {Link} from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <>
      <div className="container">
        <div className="header">
          <ul>
            <Link to={"./home"} className="list">
              Home
            </Link>
            <Link to={"./admin"} className="list">
              Admin
            </Link>
            <Link className="list">About</Link>
            <Link className="list">Contact</Link>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
