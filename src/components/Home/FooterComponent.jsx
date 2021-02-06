import React from "react";
//assets
import Logo from "../../assets/logo.png";
import Vimeo from "../../assets/vimeo-white.png";
import Instagram from "../../assets/instagram-white.png";

const FooterComponent = () => {
  return (
    <React.Fragment>
      <footer className="footer-container" id="footer-component">
        <div className="footer-container__card">
          <a
            href="https://www.google.com/maps/place/Jacksons+Warehouse,+20+Tariff+St,+Manchester+M1+2FJ,+UK/@53.4815922,-2.2325703,17z/data=!4m8!1m2!2m1!1s17+Jacksons+Warehouse+manchester+uk!3m4!1s0x487bb1bc38c50163:0x54274fefdd123abe!8m2!3d53.4815657!4d-2.2305498"
            target="_blank"
          >
            <p>Manchester</p>
            <p>17 Jacksons Warehouse</p>
            <p>20 Tariff Street</p>
          </a>
        </div>
        <div className="footer-container__card">
          <div className="footer-container__logo">
            <img src={Logo} width="100px" height="auto" alt="logo" />
          </div>
          <div>
            <a
              className="footer-container__card footer-container__card--social-media"
              href="https://vimeo.com/severvisual/"
              target="_blank"
            >
              <img src={Vimeo} alt="vimeo" width="30px" height="30px" />
            </a>
            <a
              className="footer-container__card footer-container__card--social-media"
              href="https://www.instagram.com/sever_visual/"
              target="_blank"
            >
              <img src={Instagram} alt="instagram" width="30px" height="30px" />{" "}
            </a>
          </div>
          <div className="footer-bottom__title">
            ©2021 by Sever Visual Production co.
          </div>
        </div>
        <div className="footer-container__card">
          <address>
            <p>Contact</p>
            <p>
              <a href="tel:044-778-420-81-79">+44 778 420 81 79</a>
            </p>
            <p>
              <a href="mailto:hello@sever-visual.co?&subject=Sever Visual&body=How can we help?">
                hello@sever-visual.co
              </a>
            </p>
          </address>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default FooterComponent;
