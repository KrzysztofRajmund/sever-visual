import React from 'react';
//assets
import LogoWhite from '../../assets/logo-white.png';
import Vimeo from '../../assets/vimeo-white.png';
import Instagram from '../../assets/instagram-white.png';

const FooterComponent = () => {
  return (
    <React.Fragment>
      <footer className='footer-container' id='footer-component'>
        <div className='footer-container__card'>
          <a
            href='https://www.google.com/maps/search/79+sorting+house+manchester/@53.4829171,-2.233837,17z/data=!3m1!4b1'
            target='_blank'
          >
            <p>Manchester</p>
            <p>79 Sorting House</p>
            <p>83 Newton Street</p>
          </a>
        </div>
        <div className='footer-container__card'>
          <div className='footer-container__logo'>
            <img src={LogoWhite} width='100px' height='auto' alt='logo' />
          </div>
          <div>
            <a
              className='footer-container__card footer-container__card--social-media'
              href='https://vimeo.com/severvisual/'
              target='_blank'
            >
              <img src={Vimeo} alt='vimeo' width='30px' height='30px' />
            </a>
            <a
              className='footer-container__card footer-container__card--social-media'
              href='https://www.instagram.com/sever_visual/'
              target='_blank'
            >
              <img src={Instagram} alt='instagram' width='30px' height='30px' />{' '}
            </a>
          </div>
          <div className='footer-bottom__title'>
            ©2021 by Sever Visual Production co.
          </div>
        </div>
        <div className='footer-container__card'>
          <address>
            <p>Contact</p>
            <p>
              <a href='tel:+44-778-420-81-79'>+44 778 420 81 79</a>
            </p>
            <p>
              <a href='tel:+44-744-690-14-44'>+44 744 690 14 44</a>
            </p>
            <p>
              <a href='mailto:hello@sever-visual.co?&subject=Sever Visual&body=How can we help?'>
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
