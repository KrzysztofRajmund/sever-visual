import React, { useEffect, useState } from 'react';
//AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
//components
import ScrollButton from '../Home/ScrollButton';

import image from '../../assets/digital-image3.JPG';

const TalesArticle = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <React.Fragment>
      <div className='tales-article'>
        <div className='tales-article__card'>
          <img
            data-aos-delay='50'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'
            data-aos='zoom-in'
            src={image}
            alt='image-article'
          />
          <article
            // data-aos-delay='150'
            data-aos-duration='2500'
            data-aos-easing='ease-in-out'
            data-aos='fade-down'
          >
            There will be a focus on the skills required to sustain a career,
            from developing and managing standout projects, via marketing,
            fundraising and evaluation
          </article>
        </div>
      </div>
      <ScrollButton />
    </React.Fragment>
  );
};
export default TalesArticle;
