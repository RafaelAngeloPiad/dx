import React from "react";
import "./css/About.css";
import aboutImg from "./img/about.jpg";

function About(props) {
  return (
    <div id="about">
      <div className="about-container">
        <div className="about-row">
          <img src={aboutImg} className="img-responsive" alt="" />
        </div>
        <div className="about-row">
          <div className="about-text">
            <h2>About Us</h2>
            <p>{props.data ? props.data.paragraph : "loading..."}</p>
            <h3>Why Choose Us?</h3>
            <div className="list-style">
              <div className="about-content">
                <ul className="about-list">
                  {props.data
                    ? props.data.Why.map((d, i) => (
                        <li key={`${d}-${i}`}>{d}</li>
                      ))
                    : "loading"}
                </ul>
              </div>
              <div className="about-content">
                <ul className="about-list">
                  {props.data
                    ? props.data.Why2.map((d, i) => (
                        <li key={`${d}-${i}`}> {d}</li>
                      ))
                    : "loading"}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
