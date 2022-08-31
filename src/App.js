import React from "react";
import "./components/css/App.css";
import Home from "./components/pages/HomePage/Home";
import CaaS from "./components/pages/CaaS/CaaS";
import LearnMore from "./components/pages/LearnMore/LearnMore";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/pages/About/About";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/caas" element={<CaaS />} />
        <Route path="/caas" element={<About />} />
        <Route path="/learn-more" element={<LearnMore />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
