import React from "react";
import { ButtonDx } from "./ButtonDx";
import "./css/Header2.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>Get started for free.</h1>
      <p>
        Additional features, storage, and support start at just one low price.
      </p>
      <div className="hero-btns">
        <ButtonDx>GET STARTED</ButtonDx>
      </div>
    </div>
  );
}

export default HeroSection;
