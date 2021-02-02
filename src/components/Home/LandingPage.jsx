import React from "react";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-page__digital" hover-digital="цифровой" ><h1>Digital</h1></div>
      <div className="landing-page__analog" hover-analog="аналог"><h1>Analog</h1></div>
    </div>
  );
};

export default LandingPage;