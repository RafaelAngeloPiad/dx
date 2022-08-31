import "./css/Hero.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Hero({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
}) {
  return (
    <>
      <div className="splash-section ">
        <div className="container">
          <div
            className="hero_row home__hero-row"
            style={{
              display: "flex",
              flexDirection: "row-reverse",
            }}
          >
            <div className="hero_col">
              <div className="home__hero-text-wrapper">
                <h1 className="splash_heading dark">
                  <span className="headline1">Connect.</span>
                  <br />
                  <span className="headline2">Communicate.</span>
                  <br />
                  <span className="headline3">Collaborate.</span>
                </h1>
                <div className="home__hero-subtitle dark">
                  enabling Communication Service Providers to deploy{" "}
                  <b>unified communications</b> globally with{" "}
                  <b>zero capital investment.</b>
                </div>
                <Link to="/sign-up">
                  <Button
                    buttonSize="custom_btn--wide"
                    buttonColor="custom_blue"
                  >
                    Know More About Us
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hero_col">
              <div className="home__hero-img-wrapper">
                <img
                  src={process.env.PUBLIC_URL + `/images/svg-9.svg`}
                  alt="DialogX"
                  className="splash-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
