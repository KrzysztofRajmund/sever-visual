import React from "react";
//react-router
import { Link } from "react-router-dom";
//components
import ScrollButton from "../Home/ScrollButton";
const Project = () => {
  return (
    <React.Fragment>
      <div className="project">
        <div className="project__card"></div>
        <div className="project__card"></div>
        <div className="project__card"></div>
        <div className="project__card"></div>
      </div>
      <ScrollButton />
    </React.Fragment>
  );
};

export default Project;
