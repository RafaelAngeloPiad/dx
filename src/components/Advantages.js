import "./css/Advantages.css";
import { Button } from "./Button";
import { ButtonDx } from "./ButtonDx";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

function Advantages(props) {
  return (
    <div className="adv-section-wrapper">
      {props.data
        ? props.data.map((d, i) => (
            <div
              key={`${d.headline}-${i}`}
              className={d.lightBg ? "adv-section" : "adv-section dxdarkBg"}
            >
              <div
                className="adv-row"
                style={{
                  display: "flex",
                  flexDirection: d.imgStart === "start" ? "row-reverse" : "row",
                }}
              >
                <div className="adv_col">
                  <div className="adv-text-wrapper">
                    <div className="adv_top-line">{d.topLine}</div>
                    <h1
                      className={
                        d.lightText ? "adv_heading" : "adv_heading dark"
                      }
                    >
                      {d.headline}
                    </h1>
                    <div
                      className={
                        d.lightTextDesc ? "adv-subtitle" : "adv-subtitle dark"
                      }
                    >
                      {d.description}
                    </div>
                    <Link to="/">
                      <ButtonDx buttonStyle="arrow-dx">
                        {d.buttonLabel}
                      </ButtonDx>
                    </Link>
                  </div>
                </div>
                <div className="adv_col">
                  <div className="adv-img-wrapper">
                    <img src={d.img} alt={d.alt} className="adv-img" />
                  </div>
                </div>
              </div>
            </div>
          ))
        : "loading"}
    </div>
  );
}

export default Advantages;
