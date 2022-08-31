import React from "react";
import { Button } from "./Button";
import "./css/Header2.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>Dialogx For Everyone</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="custom_btn--primary"
          buttonSize="custom_btn--large"
          onClick={console.log("hey")}
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
