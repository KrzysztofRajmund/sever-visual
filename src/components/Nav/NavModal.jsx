import React, { useState } from 'react';
//react-router
import { Link } from 'react-router-dom';
//assets
import LogoWhite from '../../assets/logo-white.png';
import Vimeo from '../../assets/vimeo-white.png';
import Instagram from '../../assets/instagram-white.png';

const NavModal = () => {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(!modal);
  };
  return (
    <React.Fragment>
      <div onClick={openModal} className='nav-icon'>
        <div
          class={modal ? 'nav-icon__btn active' : 'nav-icon__btn not-active'}
        >
          <span className=' nav-icon__span nav-icon__span-first'></span>
          <span className='nav-icon__span nav-icon__span-second'></span>
          <span className='nav-icon__span nav-icon__span-third'></span>
        </div>
      </div>
      {modal ? (
        <div>
          <div className='nav-modal'>
            <Link to='/sever/digital' onClick={() => setModal(false)}>
              <h1>digital</h1>
            </Link>
            <Link>
              <h1>analog</h1>
            </Link>
            <Link>
              <h1>tales</h1>
            </Link>
            <Link>
              <h1>contact</h1>
            </Link>
          </div>
          <footer className='nav-footer'>
            <div className='nav-footer__card'>
              <div className='nav-footer__logo'>
                <img src={LogoWhite} width='70px' height='auto' alt='logo' />
              </div>
              <div>
                <a
                  className='nav-footer__card nav-footer__card--social-media'
                  href='https://vimeo.com/severvisual/'
                  target='_blank'
                >
                  <img src={Vimeo} alt='vimeo' width='20px' height='20px' />
                </a>
                <a
                  className='nav-footer__card nav-footer__card--social-media'
                  href='https://www.instagram.com/sever_visual/'
                  target='_blank'
                >
                  <img
                    src={Instagram}
                    alt='instagram'
                    width='20px'
                    height='20px'
                  />
                </a>
              </div>
              <div className='nav-footer__title'>
                ©2021 by Sever Visual Production co.
              </div>
            </div>
          </footer>
        </div>
      ) : (
        ''
      )}
    </React.Fragment>
  );
};

export default NavModal;
