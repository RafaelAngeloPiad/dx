import "./css/Advantages.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

function Advantages({
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
      <div className={lightBg ? "adv-section" : "adv-section dxdarkBg"}>
        <div
          className="adv-row"
          style={{
            display: "flex",
            flexDirection: imgStart === "start" ? "row-reverse" : "row",
          }}
        >
          <div className="adv_col">
            <div className="adv-text-wrapper">
              <div className="adv_top-line">{topLine}</div>
              <h1 className={lightText ? "adv_heading" : "adv_heading dark"}>
                {headline}
              </h1>
              <div
                className={lightTextDesc ? "adv-subtitle" : "adv-subtitle dark"}
              >
                {description}
              </div>
              <Link to="/">
                <Button buttonStyle="custom_btn--words">
                  {buttonLabel} <BsArrowRight />
                </Button>
              </Link>
            </div>
          </div>
          <div className="adv_col">
            <div className="adv-img-wrapper">
              <img src={img} alt={alt} className="adv-img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Advantages;
