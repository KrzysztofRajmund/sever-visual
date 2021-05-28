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
    setTimeout(
      () => typeWriter('first-contact', firstText, i, 'contact__first-blink'),
      4000
    );
    setTimeout(() => typeWriter('second-contact', secondText, j, null), 4500);
    setTimeout(() => typeWriter('third-contact', thirdText, k, null), 5500);
    setTimeout(
      () =>
        typeWriter('fourth-contact', fourthText, l, 'contact__fourth-blink'),
      7500
    );
    setTimeout(() => typeWriter('fifth-contact', fifthText, m, null), 9000);
    setTimeout(() => typeWriter('sixth-contact', sixthText, n, null), 10000);
    setTimeout(
      () =>
        typeWriter('seventh-contact', seventhText, o, 'contact__seventh-blink'),
      11000
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
    if (blinkClass !== null) {
      setTimeout(() => {
        document.getElementById(id).classList.remove(blinkClass);
      }, 2000);
    }
    if (index < text.length) {
      document.getElementById(id).innerHTML += text.charAt(index);
      index++;
      setTimeout(() => typeWriter(id, text, index), speed);
    }
  };

  return (
    <div className='contact'>
      <h2> SEVER VISUAL PRODUCTION co.</h2>
      <p> cultured content creators</p>
      <p id='first-contact' className='contact__first-blink first-contact'></p>
      <p id='second-contact'></p>
      <p id='third-contact'></p>
      <p
        id='fourth-contact'
        className='contact__fourth-blink fourth-contact'
      ></p>
      <p id='fifth-contact'></p>
      <p id='sixth-contact'></p>
      <p id='seventh-contact' className='contact__seventh-blink'></p>
    </div>
  );
};

export default Contact;
