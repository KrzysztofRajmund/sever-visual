import React from "react";
//router
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
//components
import FooterComponent from "./FooterComponent";
import LandingPage from './LandingPage';
import EntrancePage from './EntrancePage';
import AboutUs from './../AboutUs/AboutUs';
import Subpage from './../Subpage/Subpage';
import ProjectsList from './../Projects/ProjectsList';
import Project from './../Projects/Project';
import NavComponent from"./../Nav/NavComponent";
// import Contact from './../Contact/Contact';
const SeverApp = () => {
  return (
    <Router>
      <NavComponent/>
      <Switch>
        {/* <Route path="/onas">
          <AboutUs />
        </Route> */}
        {/* <Route path="/kontakt">
          <Contact />
        </Route> */}
            <Route path="/sever/digital/still/project-one">
          <Project />
        </Route>
           <Route path="/sever/digital/still">
          <ProjectsList />
        </Route>
          <Route path="/sever/digital">
          <Subpage />
        </Route>
        <Route path="/sever">
          <LandingPage />
        </Route>
        <Route path="/">
          <EntrancePage />
        </Route>
      </Switch>
      {/* <AboutUs /> */}
      <FooterComponent />
    </Router>
  );
};

export default SeverApp;