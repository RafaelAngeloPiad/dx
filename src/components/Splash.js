import "./css/Splash.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Splash() {
  return (
    <>
      <div className="splash-section">
        <div
          className="splash_row"
          style={{
            display: "flex",
            flexDirection: "row-reverse",
          }}
        >
          <div className="splash_col">
            <div className="splash-text-wrapper">
              <h1 className="splash_heading dark">
                <span className="headline1">Connect.</span>
                <br />
                <span className="headline2">Communicate.</span>
                <br />
                <span className="headline3">Collaborate.</span>
              </h1>
              <div className="splash_subtitle dark">
                enabling Communication Service Providers to deploy{" "}
                <b>unified communications</b> globally with{" "}
                <b>zero capital investment.</b>
              </div>
              <Link to="/sign-up">
                <Button buttonSize="custom_btn--wide" buttonColor="custom_blue">
                  Know More About Us
                </Button>
              </Link>
            </div>
          </div>
          <div className="splash_col">
            <div className="splash_img_wrapper">
              <img
                src={process.env.PUBLIC_URL + `/images/svg-9.svg`}
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
