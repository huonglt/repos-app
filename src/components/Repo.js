import React from "react";
import "./repo.css";

const Repo = ({ name, full_name, description }) => {
  return (
    <div className="repo">
      <div className="bold">{name}</div>
      <div>{full_name}</div>
      <div>{description}</div>
    </div>
  );
};

export default Repo;
