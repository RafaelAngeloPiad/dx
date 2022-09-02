import { Button } from "./Button";
import "./css/Heroimg.css";

function HeroImg(props) {
  return (
    <header id="heroimg-header">
      <div className="heroimg-introImg">
        <div className="heroimg-intro">
          <div className="heroimg-overlay">
            <div className="heroimg-intro-text">
              <h1>{props.data ? props.data.headline : "Loading"}</h1>
              <div>{props.data ? props.data.paragraph : "Loading"}</div>
              <div className="heroimg-button-wrapper">
                <Button buttonColor="custom_red">Know More</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeroImg;
