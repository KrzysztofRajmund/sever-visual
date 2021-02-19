import React, { useEffect, useState } from "react";
import DigitalImageThree from "../../assets/digital-image3.JPG";
import DigitalImageTwo from "../../assets/digital-image2.jpg";
//react-router
import { Link } from "react-router-dom";

const LandingPage = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <div className="landing-page">
      <Link to="/sever/digital">
        <div class="landing-page__card">
          <div className="landing-page__digital" hover-digital="цифровой">
            <h1>
            <span>Digital</span>
            <span>reefffds</span>
            <span>dsfcsd</span>
            <span>weesdc</span>
            <span>Digital</span>
            <span>reefffds</span>
            <span>dsfcsd</span>
            <span>weesdc</span>
            <span>weesdc</span>
            <span>Digital</span>
            </h1>
   
          </div>
        </div>
      </Link>
      <Link to="/sever/analog">
        <div class="landing-page__card">
          <div className="landing-page__analog" hover-analog="аналог">
            <h1>Analog</h1>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default LandingPage;
