import { Button } from "./Button";
import "./css/Header.css";

function Header(props) {
  return (
    <header id="header" className="header-container">
      <div className="header-intro">
        <div className="intro-text">
          <h1>{props.data ? props.data.title : "Loading"}</h1>
          <div>{props.data ? props.data.paragraph : "Loading"}</div>
          <Button buttonColor="red">Get in Touch</Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
