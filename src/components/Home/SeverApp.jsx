import React from "react";
//router
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
//components
import FooterComponent from "./FooterComponent";
import LandingPage from './LandingPage';
import LandingPage2 from './LandingPage2';
import EntrancePage from './EntrancePage';
// import AboutUs from './../AboutUs/AboutUs';
// import Contact from './../Contact/Contact';
const SeverApp = () => {
  return (
    <Router>
      <Switch>
        {/* <Route path="/onas">
          <AboutUs />
        </Route> */}
        {/* <Route path="/kontakt">
          <Contact />
        </Route> */}
        <Route path="/sever">
          <LandingPage />
        </Route>
        <Route path="/sever2">
          <LandingPage2 />
        </Route>
        <Route path="/">
          <EntrancePage />
        </Route>
      </Switch>
      <FooterComponent />
    </Router>
  );
};

export default SeverApp;