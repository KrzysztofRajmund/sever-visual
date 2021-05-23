import React, { useEffect, useState } from 'react';
//anime
import anime from 'animejs';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  //address
  let firstText = `MANCHESTER`;
  let secondText = `79 Sorting House`;
  let thirdText = ` 83 Newton Street`;
  let i = 0;
  let j = 0;
  let k = 0;
  //contact
  let fourthText = `CONTACT`;
  let fifthText = `+44 778 420 81 79`;
  let sixthText = `+44 744 690 14 44`;
  let seventhText = `hello@sever-visual.co`;
  let l = 0;
  let m = 0;
  let n = 0;
  let o = 0;
  let speed = 30;
  useEffect(() => {
    setLoading(true);
    setTimeout(() => typeWriter('first-section', firstText, i), 4000);
    setTimeout(() => typeWriter('second-section', secondText, j), 4500);
    setTimeout(() => typeWriter('third-section', thirdText, k), 5500);
    setTimeout(() => typeWriter('fourth-section', fourthText, l), 7500);
    setTimeout(() => typeWriter('fifth-section', fifthText, m), 9000);
    setTimeout(() => typeWriter('sixth-section', sixthText, n), 10000);
    setTimeout(() => typeWriter('seventh-section', seventhText, o), 11000);
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

  return (
    <div className='about'>
      <h2> SEVER VISUAL PRODUCTION co.</h2>
      <p> cultured content creators</p>
      <p id='first-section' className='first-section'></p>
      <p id='second-section'></p>
      <p id='third-section'></p>
      <p id='fourth-section' className='fourth-section'></p>
      <p id='fifth-section'></p>
      <p id='sixth-section'></p>
      <p id='seventh-section'></p>
    </div>
  );
};

export default Contact;
