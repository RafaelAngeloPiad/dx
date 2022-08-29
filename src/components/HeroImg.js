import React from "react";
import { Button } from "./Button";
import "./css/Heroimg.css";

function HeroImg(props) {
  return (
    <header id="heroimg-header">
      <div className="heroimg-introImg">
        <div className="heroimg-intro">
          <div className="heroimg-overlay">
            <div className="heroimg-intro-text">
              <h1>{props.data ? props.data.title : "Loading"}</h1>
              <p>{props.data ? props.data.paragraph : "Loading"}</p>
              <div className="heroimg-button-wrapper">
                <Button buttonColor="red">Get in Touch</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeroImg;
