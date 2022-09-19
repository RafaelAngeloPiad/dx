import React, { useEffect, useState } from "react";
import "./components/css/App.css";
import "./components/css/Animations.css";

import Home from "./components/pages/HomePage/Home";
import CaaS from "./components/pages/CaaS/CaaS";
import LearnMore from "./components/pages/LearnMore/LearnMore";
import "./components/css/ButtonDx.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/pages/About/About";
import { CSSTransition } from "react-transition-group";
import Loading from "react-fullscreen-loading";

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/caas", name: "CaaS", Component: CaaS },
  { path: "/about", name: "About", Component: About },
  { path: "/learn-more", name: "LearnMore", Component: LearnMore },
];

function App() {
  const [waiting, setWaiting] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setWaiting(false);
    }, 1000);
  });

  return (
    <Router>
      <>
        <Loading loading={waiting} background="#fff" loaderColor="#fd8567" />
        ;
        <Navbar />
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={200}
                classNames="page"
                unmountOnExit
              >
                <div className="page-container">
                  <div className="page">
                    <Component />
                    <Footer />
                  </div>
                </div>
              </CSSTransition>
            )}
          </Route>
        ))}
      </>
    </Router>
  );
}
export default App;
