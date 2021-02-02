import React from "react";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-page__button landing-page__button--digital" data-hover="цифровой" ><h1>Digital</h1></div>
      <div className="landing-page__button landing-page__button--analog" data-hover="аналог"><h1>Analog</h1></div>
    </div>
  );
};

export default LandingPage;