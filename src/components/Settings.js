import React from "react";
import "./components.css";
import logo from "../images/vacasa-logo.jpeg";
import SettingItem from "./SettingItem";

/**
 * UI component for Settings page
 */
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
      <div className="header">Support</div>
      <div className="support-container">
        <SettingItem text="Privacy Policy" className="no-border-bottom"/>
        <SettingItem text="Terms of Service"/>
      </div>
    </div>
  );
};

export default Settings;
