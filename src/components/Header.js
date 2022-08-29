import { Button } from "./Button";
import "./css/Header.css";

function Header(props) {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="intro-text">
            <h1>{props.data ? props.data.title : "Loading"}</h1>
            <div>{props.data ? props.data.paragraph : "Loading"}</div>
            <Button buttonColor="red">Get in Touch</Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
