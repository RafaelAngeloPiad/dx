import { Button } from "./Button";
import "./css/Heroimg.css";

function HeroImg(props) {
  return (
    <header id="heroimg-header">
      <div className="heroimg-introImg">
        <div className="heroimg-intro">
          <div className="heroimg-overlay">
            <div className="heroimg-intro-text">
              <div>{props.data ? props.data.paragraph : "Loading"}</div>
              <div className="heroimg-button-wrapper">
                <Button buttonColor="custom_red">Get in Touch</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeroImg;
