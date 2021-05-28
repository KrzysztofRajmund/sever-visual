import React, { useEffect, useState } from 'react';
//anime
import anime from 'animejs';

const AboutUs = () => {
  const [loading, setLoading] = useState(false);
  let firstText = `SEVER is a specialist visual production company that creates bespoke
        digital and analog content that is tailored specifically for you, the
        brand`;

  let secondText = `The foundation of our craft is pride in our heritage. Our team of Baltic
        expats are artistically cultivated in the best work from the east to the
        west of the planet`;
  let thirdText = `Our aim is to provide quality niche content that separates ourselves and
        our clients from the cliche and mediocre`;
  let i = 0;
  let j = 0;
  let k = 0;
  let speed = 30;
  useEffect(() => {
    setLoading(true);
    setTimeout(
      () => typeWriter('first-about', firstText, i, 'about__first-blink'),
      4000
    );
    setTimeout(
      () => typeWriter('second-about', secondText, j, 'about__second-blink'),
      10000
    );
    setTimeout(
      () => typeWriter('third-about', thirdText, k, 'about__third-blink'),
      18000
    );
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

  const typeWriter = (id, text, index, blinkClass) => {
    setTimeout(() => {
      document.getElementById(id).classList.remove(blinkClass);
    }, 5000);
    if (index < text.length) {
      document.getElementById(id).innerHTML += text.charAt(index);
      index++;
      setTimeout(() => typeWriter(id, text, index), speed);
    }
  };

  return (
    <div className='about'>
      <h2> SEVER VISUAL PRODUCTION co.</h2>
      <p> cultured content creators</p>
      <p id='first-about' className='about__first-blink'></p>
      <p id='second-about' className='about__second-blink'></p>
      <p id='third-about' className='about__third-blink'></p>
    </div>
  );
};

export default AboutUs;
