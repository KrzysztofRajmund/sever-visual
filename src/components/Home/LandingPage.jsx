import React from "react";
import DigitalImageThree from "../../assets/digital-image3.JPG";
import DigitalImageTwo from "../../assets/digital-image2.jpg";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div class="landing-page__card">
        <div className="landing-page__digital" hover-digital="цифровой">
          <h1>Digital</h1>
        </div>
      </div>
      <div class="landing-page__card">
        <div className="landing-page__analog" hover-analog="аналог">
          <h1>Analog</h1>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
