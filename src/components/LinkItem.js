import React from 'react';
import './repo.css';

const LinkItem = (props) => {
  const cn = `${props.className} link-container`
  return (
  <div className={cn}>
    <div className="link-text">{props.text}</div>
    <div className="link-arrow">></div>
  </div>);
};

export default LinkItem;