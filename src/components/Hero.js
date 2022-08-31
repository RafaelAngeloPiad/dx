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
      <div
        className={
          lightBg ? "home__hero-section" : "home__hero-section dxdarkBg"
        }
      >
        <div className="hero_container">
          <div
            className="hero_row home__hero-row"
            style={{
              display: "flex",
              flexDirection: imgStart === "start" ? "row-reverse" : "row",
            }}
          >
            <div className="hero_col">
              <div className="home__hero-text-wrapper">
                <div className="hero_top-line">{topLine}</div>
                <h1
                  className={lightText ? "hero_heading" : "hero_heading dark"}
                >
                  {headline}
                </h1>
                <div
                  className={
                    lightTextDesc
                      ? "home__hero-subtitle"
                      : "home__hero-subtitle dark"
                  }
                >
                  {description}
                </div>
                <Link to="/sign-up">
                  <Button
                    buttonSize="custom_btn--wide"
                    buttonColor="custom_blue"
                  >
                    {buttonLabel}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hero_col">
              <div className="home__hero-img-wrapper">
                <img src={img} alt={alt} className="home__hero-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
