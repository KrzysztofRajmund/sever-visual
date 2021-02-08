import React from "react";
//react-router
import { Link } from "react-router-dom";
//components
import ScrollButton from "../Home/ScrollButton";

const ProjectsList = () => {
  return (
    <React.Fragment>
      <div className="projects-list">
        <Link to="/sever/digital/still/project-one">
          <div className="projects-list__card">
            <h1>Client 1</h1>
          </div>
        </Link>
        <Link>
          <div className="projects-list__card">
            <h1>Client 2</h1>
          </div>
        </Link>
        <Link>
          <div className="projects-list__card">
            <h1>Client 3</h1>
          </div>
        </Link>
        <Link>
          <div className="projects-list__card">
            <h1>Client 4</h1>
          </div>
        </Link>
      </div>
      <ScrollButton />
    </React.Fragment>
  );
};

export default ProjectsList;
