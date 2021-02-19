import React from 'react';
//react-router
import { Link } from 'react-router-dom';

const Subpage = () => {
  const mouseEnterHandler = () => {
    console.log('I entered');
    const classTest = document.getElementsByClassName('classTest');
    for (var i = 0; i < classTest.length; i++) {
      classTest[i].classList.remove('active');
    }
    console.log(classTest, 'class removing');
    const test = document.getElementById('test');
    test.innerHTML = 'неподвижный';
  };

  const mouseLeaveHandler = () => {
    console.log('I left');
    const classTest = document.getElementsByClassName('classTest');
    for (var i = 0; i < classTest.length; i++) {
      classTest[i].classList.add('active');
    }
    console.log(classTest, 'class adding');

    const test = document.getElementById('test');
    test.innerHTML = 'Still';
  };

  return (
    <div className='subpage'>
      <Link to='/sever/digital/still'>
        <div
          className='subpage__card'
          onMouseOver={mouseEnterHandler}
          onMouseOut={mouseLeaveHandler}
        >
          <h2>
            <span className='classTest' id='test'>
              still
            </span>
            <span className='classTest'>sti9l*</span>
            <span className='classTest'>s6ill-=</span>
            <span className='classTest'>ytil#</span>
            <span className='classTest'>ytil#</span>
            <span className='classTest'>ytil#</span>
            <span className='classTest'>ytil#</span>
            <span className='classTest'>russian</span>
            <span className='classTest'>still</span>
            <span className='classTest'>непо_</span>
            <span className='classTest'>непо_</span>
            <span className='classTest'>sti9l*</span>
            <span className='classTest'>неподв</span>
            <span className='classTest'>вижный</span>
            <span className='classTest'>неп57!$%^жный</span>
            <span className='classTest'>неподвижный</span>
          </h2>
        </div>
      </Link>
      <Link>
        <div className='subpage__card'>
          <h1>motion</h1>
        </div>
      </Link>
      <Link>
        <div className='subpage__card'>
          <h1>3d</h1>
        </div>
      </Link>
      <Link>
        <div className='subpage__card'>
          <h1>art</h1>
        </div>
      </Link>
    </div>
  );
};

export default Subpage;
