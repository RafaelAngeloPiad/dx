import React from "react";
import { Button } from "./Button";
import "./css/Header2.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>Get started for free.</h1>
      <p>
        Additional features, storage, and support start at just one low price.
      </p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="custom_btn--primary"
          buttonSize="custom_btn--large"
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
