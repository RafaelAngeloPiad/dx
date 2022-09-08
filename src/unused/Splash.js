import "./css/Splash.css";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";

function Splash({ headline, subtitle, imgStart, img, buttonLabel }) {
  return (
    <>
      {/* <div><img src={process.env.PUBLIC_URL + /></div> */}
      <div className="splash-section">
        <div
          className="splash_row"
          style={{
            display: "flex",
            flexDirection: imgStart === "yes" ? "row-reverse" : "row",
          }}
        >
          <div className="splash_col">
            <div className="splash-text-wrapper">
              <h1 className="splash_heading dark">{headline}</h1>
              <div className="splash_subtitle dark">{subtitle}</div>
              <Link to="/sign-up">
                <Button buttonSize="custom_btn--wide" buttonColor="custom_blue">
                  {buttonLabel}
                </Button>
              </Link>
            </div>
          </div>
          <div className="splash_col">
            <div className="splash_img_wrapper">
              <img
                src={process.env.PUBLIC_URL + img}
                alt="DialogX"
                className="splash-img"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Splash;
