import React, { useEffect, useState } from 'react';
//anime
import anime from 'animejs';

const AboutUs = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(typeWriter, 4000);
  }, []);

  if (loading) {
    var textWrapper = document.querySelector('h2');
    var regex = /\S/g;
    textWrapper.innerHTML = textWrapper.textContent.replace(
      regex,
      "<span class='letter'>$&</span>"
    );

    anime.timeline({ loop: false }).add({
      targets: 'h2 .letter',
      translateX: [40, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 3000,
      delay: (el, i) => 500 + 70 * i,
    });

    var textWrapper = document.querySelector('p');
    var regex = /\S/g;
    textWrapper.innerHTML = textWrapper.textContent.replace(
      regex,
      "<span class='letter'>$&</span>"
    );

    anime.timeline({ loop: false }).add({
      targets: 'p .letter',
      translateX: [40, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 3000,
      delay: (el, i) => 500 + 100 * i,
    });
  }

  let firstText = `SEVER is a specialist visual production company that creates bespoke
        digital and analog content that is tailored specifically for you, the
        brand.`;
  let i = 0;
  let speed = 70;
  const typeWriter = () => {
    if (i < firstText.length) {
      document.getElementById('first-section').innerHTML += firstText.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  };

  return (
    <div className='about'>
      <h2> SEVER VISUAL PRODUCTION co.</h2>
      <p> cultured content creators</p>
      <p id='first-section'></p>
      <p>
        The foundation of our craft is pride in our heritage. Our team of Baltic
        expats are artistically cultivated in the best work from the east to the
        west of the planet.
      </p>
      <p>
        {' '}
        Our aim is to provide quality niche content that separates ourselves and
        our clients from the cliche and mediocre.
      </p>
    </div>
  );
};

export default AboutUs;
