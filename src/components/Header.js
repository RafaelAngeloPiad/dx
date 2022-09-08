import "./css/Header.css";

function Header(props) {
  return (
    <header id="header" className="header-container">
      <div className="header-intro">
        <div className="intro-text">
          <h1>{props.data.paragraph}</h1>
        </div>
        <div className="header-img-wrapper">
          <div className="img-sizer"></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
