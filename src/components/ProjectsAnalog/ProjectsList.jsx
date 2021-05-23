import React, { useState, useEffect } from 'react';
//react-player
import ReactPlayer from 'react-player/lazy';
//react-router
import { Link, useParams } from 'react-router-dom';
//components
import ScrollButton from '../Home/ScrollButton';

const ProjectsList = () => {
  const container = document.getElementsByClassName('projects-list')[0];
  const section = document.getElementsByClassName('projects-list__filter')[0];
  let currentPix = window.pageYOffset;
  let currentCurve = window.pageYOffset;
  console.log(currentPix, 'currentPix');

  const [loading, setLoading] = useState(false);

  useEffect(() => setLoading(true), []);

  if (loading) {
    //skew whole page animation
    const skewImage = () => {
      const newPix = window.pageYOffset;
      const skewPix = newPix - currentPix;
      const speed = skewPix * 0.15;

      container.style.transform = `skewY(${speed}deg)`;
      // section.style.filter = `invert(${speed * 200}%)`;
      currentPix = newPix;
      requestAnimationFrame(skewImage);
    };
    skewImage();
    //curve each section animation
    // const curveImage = () => {
    //   const newCurve = window.pageYOffset;
    //   const curve = newCurve - currentCurve;
    //   const curveSize = curve;
    // for (var i = 0; i < section.length; i++) {
    //   section[i].style.clipPath = `circle(120vh at 50% ${-20 - curveSize}vh)`;
    //   //  `circle(${curveSize}vh at ${
    //   //   (30 / 100) * curveSize
    //   // } ${curveSize}vh)`;
    // }

    // for (var i = 0; i < section.length; i++) {
    //   section[
    //     i
    //   ].style.clipPath = `polygon(-10% -10%, 95% 5%, 95% 95%, 5% 95%)`;
    // }

    // for (var i = 0; i < section.length; i++) {
    //   section[i].style.transform = `translate(0px, ${-curveSize * 2}px)`;
    // }

    //   currentCurve = newCurve;
    //   requestAnimationFrame(curveImage);
    // };
    // curveImage();
  }

  return (
    <React.Fragment>
      <div className='projects-list'>
        {window.location.pathname === '/analog/still' ? (
          <>
            <Link to='/analog/still/goldenteam'>
              <section className='analog-still  projects-list__card projects-list__card--one'>
                <h1>Golden Team</h1>
              </section>
            </Link>
            <Link to='/analog/still/raincity'>
              <section className=' analog-still projects-list__card projects-list__card--two'>
                <h1>Rain City</h1>
              </section>
            </Link>
            <Link to='/analog/still/rodrigo'>
              <section className='analog-still  projects-list__card projects-list__card--three'>
                <h1>Rodrigo</h1>
              </section>
            </Link>
          </>
        ) : (
          <>
            <Link>
              <section className='motion projects-list__card projects-list__card--one'>
                <h1>Phix</h1>
                <ReactPlayer
                  controls={false}
                  className='motion-video'
                  url='https://vimeo.com/542589746'
                />
              </section>
            </Link>
            <Link>
              <section className='motion projects-list__card projects-list__card--one'>
                <h1>Art of Laura</h1>
                <ReactPlayer
                  controls={false}
                  className='motion-video'
                  url='https://vimeo.com/509803591'
                />
              </section>
            </Link>
            <Link>
              <section className='motion projects-list__card projects-list__card--one'>
                <h1>Phix box</h1>
                <ReactPlayer
                  controls={false}
                  className='motion-video'
                  url='https://vimeo.com/510009771'
                />
              </section>
            </Link>
          </>
        )}
      </div>
      <ScrollButton />
    </React.Fragment>
  );
};

export default ProjectsList;
