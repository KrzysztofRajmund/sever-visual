import React from "react";
import DigitalImage from "../../assets/digital-image.jpg";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div class="artist-card">
        <div className="landing-page__digital" hover-digital="цифровой">
          <h1>Digital</h1>
        </div>
        <img class="artist-card__img" src={DigitalImage} alt="St. Vincent" />
      </div>
      <div class="artist-card">
        <div className="landing-page__analog" hover-analog="аналог">
          <h1>Analog</h1>
        </div>
        <img class="artist-card__img" src={DigitalImage} alt="St. Vincent" />
      </div>
    </div>
  );
};

export default LandingPage;
