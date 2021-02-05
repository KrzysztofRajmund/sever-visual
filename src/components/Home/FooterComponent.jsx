import React from "react";
//assets
import Logo from "../../assets/logo.png";
import Vimeo from "../../assets/vimeo-white.png";
import Instagram from "../../assets/instagram-white.png";

const FooterComponent = () => {
  return (
    <React.Fragment>
      <footer className="footer-container">
        <div className="footer-container__card">
          <a
            href="https://www.google.com/maps/place/CitiPark+75+Dale+Street+Manchester/@53.4807006,-2.234832,17z/data=!4m13!1m7!3m6!1s0x487bb1be86f0a4af:0xde14aab4e390b87e!2sChina+Ln,+Manchester,+UK!3b1!8m2!3d53.4807006!4d-2.2326433!3m4!1s0x487bb1bdd3ec6173:0x9cee7d5252a1c072!8m2!3d53.4799911!4d-2.2318487"
            target="_blank"
          >
            <p>Manchester</p>
            <p>China Lane</p>
            <p>M1 3EZ</p>
          </a>
        </div>
        <div className="footer-container__card">
          <div className="footer-container__logo">
            <img src={Logo} width="100px" height="auto" alt="logo" />
          </div>
          <div>
            <a
              className="footer-container__card footer-container__card--social-media"
              href="/"
              target="_blank"
            >
              <img src={Vimeo} alt="vimeo" width="30px" height="30px" />{" "}
            </a>
            <a
              className="footer-container__card footer-container__card--social-media"
              href="/"
              target="_blank"
            >
              <img src={Instagram} alt="instagram" width="30px" height="30px" />{" "}
            </a>
          </div>
          <div className="footer-bottom__title">
            ©2021 by Sever Visual Production
          </div>
        </div>
        <div className="footer-container__card">
          <address>
            <p>Contact</p>
            <p>
              <a href="tel:044-508-224-177">+44 508 224 177</a>
            </p>
            <p>
              <a href="mailto:sever@gmail.com?&subject=Sever Visual&body=How can we help?">
                sever@gmail.com
              </a>
            </p>
          </address>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default FooterComponent;
