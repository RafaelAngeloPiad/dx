import React from "react";
import "./css/Highlights.css";
import { iconStyle } from "./data/global-data.js";
import {
  MdAssignment,
  MdAccessibility,
  MdAccountBalanceWallet,
} from "react-icons/md";

function Highlights() {
  return (
    <div className="highlights-container">
      <h1>Working Better, Together</h1>
      <h3>Trusted by 95% of Fortune 500 companies.</h3>

      {iconStyle.gradientSvg}

      <div className="highlight-box-wrapper">
        <div className="highlight-box">
          <div className="highlight-icon-wrapper">
            <MdAssignment style={{ fill: iconStyle.gradientStyle }} />
          </div>
          <h2 className="highlight-heading">Flexible</h2>
          <h4 className="highlight-subtitle">
            Adaptable for any workstyle, role, or device so you can choose when,
            where, and how you work.
          </h4>
        </div>
        <div className="highlight-box">
          <div className="highlight-icon-wrapper">
            <MdAccountBalanceWallet style={{ fill: iconStyle.gradientStyle }} />
          </div>
          <h2 className="highlight-heading">Flexible</h2>
          <h4 className="highlight-subtitle">
            Adaptable for any workstyle, role, or device so you can choose when,
            where, and how you work.
          </h4>
        </div>
        <div className="highlight-box">
          <div className="highlight-icon-wrapper">
            <MdAccessibility style={{ fill: iconStyle.gradientStyle }} />
          </div>
          <h2 className="highlight-heading">Flexible</h2>
          <h4 className="highlight-subtitle">
            Adaptable for any workstyle, role, or device so you can choose when,
            where, and how you work.
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Highlights;
