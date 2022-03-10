import React from "react";
import "./repo.css";
import logo from "../images/vacasa-logo.jpeg";

const Settings = () => {
  return (
    <div className="settings-container">
      <div>Settings</div>
      <div className="settings">
        <img src={logo} alt="vacasa-logo" className="settings-logo" />
      </div>
    </div>
  );
};

export default Settings;
