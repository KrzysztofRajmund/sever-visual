import React, { useState } from 'react';
//react-router
import { Link } from 'react-router-dom';
//assets
import LogoWhite from '../../assets/logo-white.png';
import Vimeo from '../../assets/vimeo-white.png';
import Instagram from '../../assets/instagram-white.png';

const NavModal = (props) => {
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
          <div className='nav-modal' onClick={() => setModal(false)}>
            <Link
              to='/sever/digital'
              onMouseOver={() =>
                props.scrambleTextHandler(
                  'цифрй',
                  document.getElementById('digital')
                )
              }
              onMouseLeave={() =>
                props.scrambleTextHandler(
                  'Digital',
                  document.getElementById('digital')
                )
              }
            >
              <h2 id='digital'>Digital</h2>
            </Link>
            <Link
              onMouseOver={() =>
                props.scrambleTextHandler(
                  'цифрй',
                  document.getElementById('analog')
                )
              }
              onMouseLeave={() =>
                props.scrambleTextHandler(
                  'analog',
                  document.getElementById('analog')
                )
              }
            >
              <h2 id='analog'>analog</h2>
            </Link>
            <Link
              onMouseOver={() =>
                props.scrambleTextHandler(
                  'цrtрй',
                  document.getElementById('tales')
                )
              }
              onMouseLeave={() =>
                props.scrambleTextHandler(
                  'tales',
                  document.getElementById('tales')
                )
              }
            >
              <h2 id='tales'>tales</h2>
            </Link>
            <Link
              onMouseOver={() =>
                props.scrambleTextHandler(
                  'цифрй',
                  document.getElementById('about')
                )
              }
              onMouseLeave={() =>
                props.scrambleTextHandler(
                  'about',
                  document.getElementById('about')
                )
              }
            >
              <h2 id='about'>about</h2>
            </Link>
            <Link
              onMouseOver={() =>
                props.scrambleTextHandler(
                  'цифрй',
                  document.getElementById('contact')
                )
              }
              onMouseLeave={() =>
                props.scrambleTextHandler(
                  'contact',
                  document.getElementById('contact')
                )
              }
            >
              <h2 id='contact'>contact</h2>
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
