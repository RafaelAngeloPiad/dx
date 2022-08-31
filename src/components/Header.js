import { Button } from "./Button";
import "./css/Header.css";

function Header(props) {
  return (
    <header id="header" className="header-container">
      <div className="header-intro">
        <div className="intro-text">
          <h1>{props.data.paragraph}</h1>
        </div>
        <div className="blobs">
          <div className="blobV">
            <img
              src={process.env.PUBLIC_URL + `/images/blob2.svg`}
              className="custom_navbar-icon"
              alt="DialogX"
            />
          </div>
          <img
            src={process.env.PUBLIC_URL + `/images/blob3.svg`}
            className="custom_navbar-icon"
            alt="DialogX"
          />
        </div>
        <div className="blobs2">
          <img
            src={process.env.PUBLIC_URL + `/images/blob.svg`}
            className="custom_navbar-icon"
            alt="DialogX"
          />
        </div>
        <div className="blobV2">
          <img
            src={process.env.PUBLIC_URL + `/images/blob2.svg`}
            className="custom_navbar-icon"
            alt="DialogX"
          />
        </div>
        <div className="header-img-wrapper">
          <div className="img-sizer"></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
