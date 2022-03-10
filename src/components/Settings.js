import React from "react";
import "./repo.css";
import logo from "../images/vacasa-logo.jpeg";

const Settings = () => {
  return (
    <div className="settings-container">
      <div className="header">Settings</div>
      <div className="settings">
        <div className="settings-logo"><img src={logo} alt="vacasa-logo" className="settings-logo" /></div>
        <div className="settings-block">
          <div className="settings-text">Vacasa Interview</div>
          <div className="settings-text">vacasa.interview@vacasa.com</div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
