import "./css/Advantages.css";
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
        className={lightBg ? "home__adv-section" : "home__adv-section dxdarkBg"}
      >
        <div className="container">
          <div
            className="adv_row home__adv-row"
            style={{
              display: "flex",
              flexDirection: imgStart === "start" ? "row-reverse" : "adv_row",
            }}
          >
            <div className="adv_col">
              <div className="home__adv-text-wrapper">
                <div className="adv_top-line">{topLine}</div>
                <h1 className={lightText ? "adv_heading" : "adv_heading dark"}>
                  {headline}
                </h1>
                <div
                  className={
                    lightTextDesc
                      ? "home__adv-subtitle"
                      : "home__adv-subtitle dark"
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
            <div className="hadv_col">
              <div className="home__adv-img-wrapper">
                <img src={img} alt={alt} className="home__adv-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
