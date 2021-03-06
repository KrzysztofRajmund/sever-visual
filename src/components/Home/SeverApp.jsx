import React from 'react';
//router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//components
import FooterComponent from './FooterComponent';
import LandingPage from './LandingPage';
import EntrancePage from './EntrancePage';
import AboutUs from './../AboutUs/AboutUs';
import Contact from './../Contact/Contact';
import Tales from './../Tales/Tales';
import TalesArticle from './../Tales/TalesArticle';
import Subpage from './../Subpage/Subpage';
import ProjectsListDigital from '../ProjectsDigital/ProjectsList';
import ProjectDigital from '../ProjectsDigital/Project';
import ProjectsListAnalog from '../ProjectsAnalog/ProjectsList';
import ProjectAnalog from '../ProjectsAnalog/Project';
import NavModal from './../Nav/NavModal';
// import Contact from './../Contact/Contact';
const SeverApp = () => {
  // //enter shuffle
  // const mouseEnterShuffle = (title, elementWithID) => {
  //   console.log(elementWithID);
  //   const shuffleSpan = document.getElementsByClassName('shuffle__span');
  //   for (var i = 0; i < shuffleSpan.length; i++) {
  //     shuffleSpan[i].classList.remove('shuffle__active-out');
  //   }
  //   elementWithID.innerHTML = title;
  // };
  // //out shuffle
  // const mouseOutShuffle = (title, elementWithID) => {
  //   const shuffleSpan = document.getElementsByClassName('shuffle__span');
  //   for (var i = 0; i < shuffleSpan.length; i++) {
  //     shuffleSpan[i].classList.add('shuffle__active-out');
  //   }
  //   elementWithID.innerHTML = title;
  // };
  //scramble text
  const scrambleTextHandler = (title, id) => {
    var _createClass = (function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ('value' in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    })();

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class as a function');
      }
    }

    //text scramble
    var TextScramble = (function () {
      function TextScramble(el) {
        _classCallCheck(this, TextScramble);

        this.el = el;
        this.chars = 'ア-トデジ';
        this.update = this.update.bind(this);
      }

      _createClass(TextScramble, [
        {
          key: 'setText',
          value: function setText(newText) {
            var _this = this;

            var oldText = this.el.innerText;
            var length = Math.max(oldText.length, newText.length);
            var promise = new Promise(function (resolve) {
              return (_this.resolve = resolve);
            });
            this.queue = [];
            for (var i = 0; i < length; i++) {
              var from = oldText[i] || '';
              var to = newText[i] || '';
              var start = Math.floor(Math.random() * 40);
              var end = start + Math.floor(Math.random() * 40);
              this.queue.push({ from: from, to: to, start: start, end: end });
            }
            cancelAnimationFrame(this.frameRequest);
            this.frame = 0;
            this.update();
            return promise;
          },
        },
        {
          key: 'update',
          value: function update() {
            var output = '';
            var complete = 0;
            for (var i = 0, n = this.queue.length; i < n; i++) {
              var _queue$i = this.queue[i],
                from = _queue$i.from,
                to = _queue$i.to,
                start = _queue$i.start,
                end = _queue$i.end,
                char = _queue$i.char;

              if (this.frame >= end) {
                complete++;
                output += to;
              } else if (this.frame >= start) {
                if (!char || Math.random() < 0.28) {
                  char = this.randomChar();
                  this.queue[i].char = char;
                }
                output += '<span class="dud">' + char + '</span>';
              } else {
                output += from;
              }
            }
            this.el.innerHTML = output;
            if (complete === this.queue.length) {
              this.resolve();
            } else {
              this.frameRequest = requestAnimationFrame(this.update);
              this.frame++;
            }
          },
        },
        {
          key: 'randomChar',
          value: function randomChar() {
            return this.chars[Math.floor(Math.random() * this.chars.length)];
          },
        },
      ]);

      return TextScramble;
    })();

    // text scramble content!
    var phrases = [title];

    var fx = new TextScramble(id);

    var counter = 0;
    var next = function next() {
      fx.setText(phrases[counter]).then(function () {
        // setTimeout(next, 800);
      });
      counter = (counter + 1) % phrases.length;
    };

    next();
  };
  return (
    <Router>
      <NavModal scrambleTextHandler={scrambleTextHandler} />
      <Switch>
        <Route path='/about'>
          <AboutUs />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/tales/:id'>
          <TalesArticle />
        </Route>
        <Route path='/tales'>
          <Tales />
        </Route>

        {/* PROJECT DIGITAL */}
        <Route path='/digital/still/phix'>
          <ProjectDigital />
        </Route>
        <Route path='/digital/still/sneakers'>
          <ProjectDigital />
        </Route>
        <Route path='/digital/motion/phix'>
          <ProjectDigital />
        </Route>
        <Route path='/digital/motion/culainwood'>
          <ProjectDigital />
        </Route>
        <Route path='/digital/motion/artoflaura'>
          <ProjectDigital />
        </Route>
        {/* PROJECT DIGITAL */}
        {/* PROJECT ANALOG */}
        <Route path='/analog/still/goldenteam'>
          <ProjectAnalog />
        </Route>
        <Route path='/analog/still/raincity'>
          <ProjectAnalog />
        </Route>
        <Route path='/analog/still/rodrigo'>
          <ProjectAnalog />
        </Route>
        <Route path='/analog/motion/phix'>
          <ProjectAnalog />
        </Route>
        <Route path='/analog/motion/culainwood'>
          <ProjectAnalog />
        </Route>
        <Route path='/analog/motion/artoflaura'>
          <ProjectAnalog />
        </Route>
        {/* PROJECT ANALOG */}
        <Route path='/digital/still'>
          <ProjectsListDigital />
        </Route>
        <Route path='/digital/motion'>
          <ProjectsListDigital />
        </Route>
        <Route path='/analog/still'>
          <ProjectsListAnalog />
        </Route>
        <Route path='/analog/motion'>
          <ProjectsListAnalog />
        </Route>
        <Route path='/digital'>
          <Subpage
            //shuffle animation type
            // mouseEnterShuffle={mouseEnterShuffle}
            // mouseOutShuffle={mouseOutShuffle}
            digital='digital'
            scrambleTextHandler={scrambleTextHandler}
          />
        </Route>
        <Route path='/analog'>
          <Subpage
            analog='analog'
            //shuffle animation type
            // mouseEnterShuffle={mouseEnterShuffle}
            // mouseOutShuffle={mouseOutShuffle}
            scrambleTextHandler={scrambleTextHandler}
          />
        </Route>
        <Route path='/'>
          <LandingPage scrambleTextHandler={scrambleTextHandler} />
        </Route>
        {/* <Route path='/'>
          <EntrancePage />
        </Route> */}
      </Switch>
      {/* <AboutUs /> */}
      <FooterComponent />
    </Router>
  );
};

export default SeverApp;
