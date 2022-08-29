import React from "react";
import "./components/css/App.css";
import Home from "./components/pages/HomePage/Home";
import Products from "./components/pages/Products/Products";
import SignUp from "./components/pages/SignUp/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/pages/Footer/Footer";
import Navtop from "./components/Navtop";
import { DropdownItems } from "./components/pages/HomePage/Data";

function App() {
  return (
    <BrowserRouter>
      <Navtop />
      <Navbar data={DropdownItems} />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
        <Footer />
 
    </BrowserRouter>
  );
}

export default App;
