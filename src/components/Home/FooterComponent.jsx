import React from 'react';
//assets
import Logo from "../../assets/logo.png"
import Facebook from "../../assets/facebook-white.png";
import Instagram from "../../assets/instagram-white.png";

const FooterComponent = () => {
    return (
        <React.Fragment>
       <footer className="footer-container">
           <div className="footer-container__card">
            <address>
                <h5>
                   Contact
                    <hr/>
                </h5>
                <p>
                +44 508 224 177
                </p>
                <p>
                China Lane
                </p>
                <p>
               Manchester, M1 3EZ
                </p>
                <p>
              <a href="/sever">sever@gmail.com</a>
                </p>
            </address>
           </div>
           <div className="footer-container__card">
            <div className="footer-container__logo">
            <img src={Logo} width="100px" height="auto"  alt="logo"/>
            </div>
            <a className="footer-container__card footer-container__card--social-media" href="/" target="_blank"><img src={Facebook} alt="facebook" width="30px" height="30px"/> </a>
            <a className="footer-container__card footer-container__card--social-media" href="/" target="_blank"><img src={Instagram} alt="instagram" width="30px" height="30px"/> </a>
            <div className="footer-bottom__title">
         Visual Production Company
     </div>
           </div>
           <div className="footer-container__card">
            <address>
                <h5>
                   Opening hours
                    <hr/>
                </h5>
                <p>
                Mon–Wed  6–11
                </p>
                <p>
                Thu–Sat  4–12
                </p>
                <p>
                Sun  3–10
                </p>
                <p>
                <a href="/sever">Book Now</a>
                </p>
            </address>
           </div>
       </footer>
     </React.Fragment>
    )
}

export default FooterComponent
