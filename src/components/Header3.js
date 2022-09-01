import { Button } from "./Button";
import "./css/Header.css";

function Header(props) {
  return (
    <header id="header" className="header3-container">
      <div className="header3-intro">
        <div className="intro-text">
          <h1>{props.data.title}</h1>
        </div>
        <div className="intro-desc">{props.data.paragraph}</div>
      </div>
    </header>
  );
}

export default Header;
