import { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./css/Navbar.css";
import LogoDx from "./img/logoDark.webp";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { DropdownItems } from "./pages/HomePage/Data";
import Dropdown from "./Dropdown";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [dropdown, setDropdown] = useState(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener("resize", showButton);
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: "#000000" }}>
        <nav className="custom_navbar">
          <div className="custom_navbar-container">
            <Link
              to="/"
              className="custom_navbar-logo"
              onClick={closeMobileMenu}
            >
              <img src={LogoDx} className="custom_navbar-icon" alt="DialogX" />
            </Link>
            <div className="custom_menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul
              className={
                click ? "custom_navbar-menu active" : "custom_navbar-menu"
              }
            >
              <li
                className="custom_navbar-item"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                <Link
                  to="/"
                  className="custom_navbar-links"
                  onClick={closeMobileMenu}
                >
                  Home <i className="fas fa-caret-down" />
                </Link>
                {dropdown && <Dropdown data={DropdownItems} />}
              </li>

              <li className="custom_navbar-item">
                <Link
                  to="/products"
                  className="custom_navbar-links"
                  onClick={closeMobileMenu}
                >
                  Products
                </Link>
              </li>
              <li className="custom_navbar-btn">
                {button ? (
                  <Link to="/sign-up">
                    <Button
                      buttonStyle="custom_btn--outline"
                      buttonColor="custom_blue"
                    >
                      SIGN UP
                    </Button>
                  </Link>
                ) : (
                  <Link to="/sign-up">
                    <Button
                      buttonStyle="custom_btn--outline"
                      buttonSize="custom_btn--mobile"
                      buttonColor="custom_blue"
                      onClick={closeMobileMenu}
                    >
                      SIGN UP
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
