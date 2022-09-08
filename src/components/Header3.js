import { ButtonDx } from "./ButtonDx";
import "./css/Header.css";

function Header3(props) {
  return (
    <header id="header" className="header3-container">
      <div className="header3-intro">
        <div className="header3-intro-text">
          <h1>{props.data.title}</h1>
        </div>
        <div className="intro-desc">{props.data.paragraph}</div>
        <ButtonDx buttonStyle="arrow-dx">See More</ButtonDx>
      </div>
    </header>
  );
}

export default Header3;
