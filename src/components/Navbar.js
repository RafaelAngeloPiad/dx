import { useState } from "react";

import { Link } from "react-router-dom";
import "./css/Navbar.css";
import { ButtonDx } from "./ButtonDx";
import { FaBars, FaTimes } from "react-icons/fa"; //https://react-icons.github.io/react-icons
import { IconContext } from "react-icons/lib";
import Navtop from "./Navtop";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [transparency, setTransparency] = useState(true);

  const toggleTransparency = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 70) {
      setTransparency(false);
    } else {
      setTransparency(true);
    }
  };

  window.addEventListener("scroll", toggleTransparency);

  return (
    <>
      <div className="nav-whole-wrapper">
        <Navtop />
        <IconContext.Provider value={{ color: "#000000" }}>
          <nav
            className={transparency ? "custom_navbar" : "custom_navbar active"}
          >
            <div className="custom_navbar-container">
              <Link
                to="/"
                className="custom_navbar-logo"
                onClick={closeMobileMenu}
              >
                <img
                  src={process.env.PUBLIC_URL + `/images/logoDark.webp`}
                  className="custom_navbar-icon"
                  alt="DialogX"
                />
              </Link>
              <div className="custom_menu-icon" onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
              </div>
              <ul
                className={
                  click ? "custom_navbar-menu active" : "custom_navbar-menu"
                }
              >
                <li className="custom_navbar-item">
                  <Link
                    to="/"
                    className="custom_navbar-links"
                    onClick={closeMobileMenu}
                  >
                    Home
                  </Link>
                </li>

                <li className="custom_navbar-item">
                  <Link
                    to="/caas"
                    className="custom_navbar-links"
                    onClick={closeMobileMenu}
                  >
                    CaaS
                  </Link>
                </li>
                <li className="custom_navbar-item">
                  <Link
                    to="/about"
                    className="custom_navbar-links"
                    onClick={closeMobileMenu}
                  >
                    About
                  </Link>
                </li>
                <li className="custom_navbar-btn">
                  <Link to="/learn-more">
                    <ButtonDx buttonStyle="rounded-dx">Learn More</ButtonDx>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </IconContext.Provider>
      </div>
    </>
  );
}

export default Navbar;
