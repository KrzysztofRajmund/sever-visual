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
          <Link to='2015' duration={650} spy={true} smooth={true} offset={0}>
            <p>12.2015</p>
          </Link>
          <Link to='2015' duration={650} spy={true} smooth={true} offset={0}>
            <div className='tales__nav-article--radio'></div>
          </Link>

          {/* hr */}
          <hr className='tales__hr' />
          <Link to='2015' duration={650} spy={true} smooth={true} offset={0}>
            <div>Nasty Gal Campaign</div>
          </Link>
        </article>
        <article className='tales__nav-article'>
          <Link to='2017' duration={650} spy={true} smooth={true} offset={0}>
            <p>10.2017</p>
          </Link>
          <Link to='2017' duration={650} spy={true} smooth={true} offset={0}>
            <div className='tales__nav-article--radio'></div>
          </Link>

          {/* hr */}
          <hr className='tales__hr' />
          <Link to='2017' duration={650} spy={true} smooth={true} offset={0}>
            <div>New Arrival Campaign</div>
          </Link>
        </article>
        <article className='tales__nav-article'>
          <Link to='2020' duration={650} spy={true} smooth={true} offset={0}>
            <p>12.2020</p>
          </Link>
          <Link to='2020' duration={650} spy={true} smooth={true} offset={0}>
            <div className='tales__nav-article--radio'></div>
          </Link>

          {/* hr */}
          <hr className='tales__hr' />
          <Link to='2020' duration={650} spy={true} smooth={true} offset={0}>
            <div>Nasty Gal Campaign</div>
          </Link>
        </article>
        <article className='tales__nav-article'>
          <Link to='2021' duration={650} spy={true} smooth={true} offset={0}>
            <p>09.2021</p>
          </Link>
          <Link to='2021' duration={650} spy={true} smooth={true} offset={0}>
            <div className='tales__nav-article--radio'></div>
          </Link>

          {/* hr */}
          <hr className='tales__hr' />
          <Link to='2021' duration={650} spy={true} smooth={true} offset={0}>
            <div>Nasty Gal Campaign</div>
          </Link>
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
        <article className='tales__article' id='2020'>
          <div className='tales__article-img'>
            <img src={DigitalImageThree} alt='image' />
          </div>

          <div className='tales__article-text'> I am article 2020</div>
        </article>
        <article className='tales__article' id='2021'>
          <div className='tales__article-text'> I am article 2021</div>
          <div className='tales__article-img'>
            <img src={DigitalImageThree} alt='image' />
          </div>
        </article>
      </section>
    </div>
  );
};

export default Tales;
