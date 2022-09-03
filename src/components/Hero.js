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
      <div className={lightBg ? "hero-section" : "hero-section dxdarkBg"}>
        <div className="hero_container">
          <div
            className="hero_row"
            style={{
              display: "flex",
              flexDirection: imgStart === "start" ? "row-reverse" : "row",
            }}
          >
            <div className="hero_col">
              <div className="hero-text-wrapper">
                <div className="hero-top-line">{topLine}</div>
                <h1
                  className={lightText ? "hero_heading" : "hero_heading dark"}
                >
                  {headline}
                </h1>
                <div
                  className={
                    lightTextDesc ? "hero-subtitle" : "hero-subtitle dark"
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
              <div className="hero-img-wrapper">
                <img src={img} alt={alt} className="hero-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
