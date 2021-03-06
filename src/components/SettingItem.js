import React from 'react';
import './components.css';

/**
 * UI component for an item in Setting
 */
const SettingItem = (props) => {
  const cn = `${props.className ? props.className : ''} link-container`
  return (
  <div className={cn}>
    <div className="link-text">{props.text}</div>
    <div className="link-arrow">{`>`}</div>
  </div>);
};

export default SettingItem;