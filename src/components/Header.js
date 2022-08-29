import React from "react";
import { Button } from "./Button";
import "./css/Header.css";

function Header(props) {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="intro-text">
            <h1>
              {props.data ? props.data.title : "Loading"}
              <span></span>
            </h1>
            <span>{props.data ? props.data.paragraph : "Loading"}</span>
            <Button buttonColor="red">Get in Touch</Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
