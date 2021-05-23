import React, { useEffect, useState } from 'react';
//anime
import anime from 'animejs';

const AboutUs = () => {
  const [loading, setLoading] = useState(false);
  let firstText = `SEVER is a specialist visual production company that creates bespoke
        digital and analog content that is tailored specifically for you, the
        brand.`;

  let secondText = `The foundation of our craft is pride in our heritage. Our team of Baltic
        expats are artistically cultivated in the best work from the east to the
        west of the planet.`;
  let thirdText = `Our aim is to provide quality niche content that separates ourselves and
        our clients from the cliche and mediocre.`;
  let i = 0;
  let j = 0;
  let k = 0;
  let speed = 30;
  useEffect(() => {
    setLoading(true);
    setTimeout(() => typeWriter('first-section', firstText, i), 4000);
    setTimeout(() => typeWriter('second-section', secondText, j), 10000);
    setTimeout(() => typeWriter('third-section', thirdText, k), 18000);
    // awaitingInterval();
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

  const typeWriter = (id, text, index) => {
    if (index < text.length) {
      document.getElementById(id).innerHTML += text.charAt(index);
      index++;
      setTimeout(() => typeWriter(id, text, index), speed);
    }
  };

  // const awaitingInterval = () => {
  //   var awaitingElement = document.getElementById('about__awaiting');
  //   console.log(awaitingElement, 'awaiting elment');
  //   if (awaitingElement.style.display === 'block') {
  //     awaitingElement.style.display = 'none';
  //   } else {
  //     awaitingElement.style.display = 'block';
  //   }
  //   // setInterval(awaitingInterval, 1000);
  // };

  return (
    <div className='about'>
      <h2> SEVER VISUAL PRODUCTION co.</h2>
      <p> cultured content creators</p>
      <p id='first-section'></p>
      {/* <p id='about__awaiting'>|</p> */}
      <p id='second-section'></p>
      <p id='third-section'></p>
    </div>
  );
};

export default AboutUs;
