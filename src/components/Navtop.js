import React from "react";
import "./css/Navtop.css";
import { MdOutlineEmail, MdLocalPhone } from "react-icons/md";
import { Link } from "react-router-dom";

function Navtop() {
  return (
    <div className="navtop-container">
      <div className="navtop-slogan">Connect.Communicate.Collaborate.</div>
      <div className="navtop-phrase">
        Unified Communications globally with zero capital investment.
      </div>
      <div>
        <div className="navtop-contacts">
          <Link to="/" className="navtop-link">
            <MdOutlineEmail className="navtop-logo" /> Email Us
          </Link>
          <Link to="/" className="navtop-link">
            <MdLocalPhone className="navtop-logo" /> 09062162298
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navtop;
