  
import React, { useEffect, useState} from "react";
//anime
import anime from "animejs";
//components
import ScrollButton from "../Home/ScrollButton";


const EntrancePage = () => {

    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
      }, []);

      if (loading) {
        var textWrapper = document.querySelector(
          ".entrance-page__wrapper--animation"
        );
        const regex = /\S/g;
        textWrapper.innerHTML = textWrapper.textContent.replace(
          regex,
          "<span class='letter'>$&</span>"
        );
    
        anime
          .timeline({ loop: false })
          .add({
            targets: ".entrance-page__wrapper--animation .letter",
            translateX: [40, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 3000,
            delay: (el, i) => 500 + 30 * i,
          })
      }

  return (
      <React.Fragment>
        <a className="entrance-page" href="/sever">
        <div className="entrance-page__wrapper">
          <h1
            data-text="sever"
          >
            sever
          </h1>
          <h5 className="entrance-page__wrapper--animation"> visual production</h5>
        </div>
      </a>
      <ScrollButton />
      </React.Fragment>
  );
};

export default EntrancePage;
