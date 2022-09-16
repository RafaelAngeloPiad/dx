import React from "react";
import { ButtonDx } from "./ButtonDx";
import "./css/Header2.css";

function Header2() {
  return (
    <div className="header2-container">
      <h1>Get started for free.</h1>
      <p>
        Additional features, storage, and support start at just one low price.
      </p>
      <div className="header2-btns">
        <ButtonDx>GET STARTED</ButtonDx>
      </div>
    </div>
  );
}

export default Header2;
