import React, { useState, UseEffect } from 'react';
//react-scroll
import { Link } from 'react-scroll';
import { useEffect } from 'react';
//assets
import DigitalImageThree from '../../assets/digital-image3.JPG';
import DigitalImageTwo from '../../assets/digital-image2.jpg';

const Tales = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <div className='tales'>
      {/* nav section */}
      <section className='tales__nav'>
        <article className='tales__nav-article'>
          <Link to='2015' duration={650} spy={true} smooth={true}>
            <p>3rd of Dec 2015</p>
          </Link>
          <small>|</small>
          {/* hr */}
          <hr className='tales__hr' />
          <span>Nasty Gal Campaign</span>
        </article>
        <article className='tales__nav-article'>
          <Link to='2017' duration={650} spy={true} smooth={true}>
            <p>6th of June 2017</p>
          </Link>
          <small>|</small>
          {/* hr */}
          <hr className='tales__hr' />
          <span>Nasty Gal Campaign</span>
        </article>
      </section>
      {/* articles sections */}
      <section className='tales__article-list'>
        <article className='tales__article' id='2015'>
          <div className='tales__article-img'>
            <img src={DigitalImageThree} alt='image' />
          </div>

          <div className='tales__article-text'> I am article 2015</div>
        </article>
        <article className='tales__article' id='2017'>
          <div className='tales__article-text'> I am article 2017</div>
          <div className='tales__article-img'>
            <img src={DigitalImageTwo} alt='image' />
          </div>
        </article>
      </section>
    </div>
  );
};

export default Tales;
