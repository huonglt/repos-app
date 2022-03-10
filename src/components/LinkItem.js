import React from 'react';
import './repo.css';

const LinkItem = (props) => {
  return (
  <div className="link-container">
    <div className="link-text">{props.text}</div>
    <div className="link-arrow">></div>
  </div>);
};

export default LinkItem;