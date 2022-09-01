import { Button } from "./Button";
import "./css/Header.css";
import { BsArrowRight } from "react-icons/bs";

function Header(props) {
  return (
    <header id="header" className="header3-container">
      <div className="header3-intro">
        <div className="header3-intro-text">
          <h1>{props.data.title}</h1>
        </div>
        <div className="intro-desc">{props.data.paragraph}</div>
        <Button buttonStyle="custom_btn--words">
          See More <BsArrowRight />
        </Button>
      </div>
    </header>
  );
}

export default Header;
