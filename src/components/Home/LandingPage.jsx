import React, { useEffect, useState } from 'react';
import DigitalImageThree from '../../assets/digital-image3.JPG';
import DigitalImageTwo from '../../assets/digital-image2.jpg';
//react-router
import { Link } from 'react-router-dom';

const LandingPage = (props) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <div className='landing-page'>
      <Link to='/sever/digital'>
        <div
          class='landing-page__card'
          onMouseOver={() =>
            props.scrambleTextHandler(
              'цифровой',
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
          <h1 id='digital'>Digital</h1>
        </div>
      </Link>
      <Link to='/sever/analog'>
        <div
          class='landing-page__card'
          onMouseOver={() =>
            props.scrambleTextHandler(
              'аналог',
              document.getElementById('analog')
            )
          }
          onMouseLeave={() =>
            props.scrambleTextHandler(
              'Analog',
              document.getElementById('analog')
            )
          }
        >
          <h1 id='analog'>Analog</h1>
        </div>
      </Link>
    </div>
  );
};

export default LandingPage;
