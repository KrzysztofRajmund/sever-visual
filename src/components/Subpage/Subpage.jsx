import React from 'react';
//react-router
import { Link } from 'react-router-dom';

const Subpage = (props) => {
  console.log(props, 'props');
  return (
    <div className='subpage'>
      {props.digital && (
        <>
          <Link to='/digital/still'>
            <div
              className='subpage__card'
              onMouseOver={() =>
                props.scrambleTextHandler(
                  'цифрй',
                  document.getElementById('still')
                )
              }
              onMouseLeave={() =>
                props.scrambleTextHandler(
                  'Still',
                  document.getElementById('still')
                )
              }
            >
              <h2 id='still'>Still</h2>
            </div>
          </Link>
          <Link to='/digital/motion'>
            <div
              className='subpage__card'
              onMouseOver={() =>
                props.scrambleTextHandler(
                  'цифой',
                  document.getElementById('motion')
                )
              }
              onMouseLeave={() =>
                props.scrambleTextHandler(
                  'Motion',
                  document.getElementById('motion')
                )
              }
            >
              <h2 id='motion'>Motion</h2>
            </div>
          </Link>
        </>
      )}
      {/* <Link to='/digital/still'> */}
      {/* //shuffle animation type */}
      {/* <div
          className='subpage__card'
          onMouseOver={() =>
            props.mouseEnterShuffle(
              'неподвижный',
              document.getElementById('shuffle__subpage--still')
            )
          }
          onMouseOut={() =>
            props.mouseOutShuffle(
              'still',
              document.getElementById('shuffle__subpage--still')
            )
          }
        >
          <h2 className='shuffle__section'>
            <span className='shuffle__span' id='shuffle__subpage--still'>
              still
            </span>
            <span className='shuffle__span'>sti9l*</span>
            <span className='shuffle__span'>s6ill-=</span>
            <span className='shuffle__span'>ytil#</span>
            <span className='shuffle__span'>ytil#</span>
            <span className='shuffle__span'>ytil#</span>
            <span className='shuffle__span'>ytil#</span>
            <span className='shuffle__span'>russian</span>
            <span className='shuffle__span'>still</span>
            <span className='shuffle__span'>непо_</span>
            <span className='shuffle__span'>непо_</span>
            <span className='shuffle__span'>sti9l*</span>
            <span className='shuffle__span'>неподв</span>
            <span className='shuffle__span'>вижный</span>
            <span className='shuffle__span'>неп57!$%^жный</span>
            <span className='shuffle__span'>неподвижный</span>
          </h2>
        </div> */}
      {/* <div
          className='subpage__card'
          onMouseOver={() =>
            props.scrambleTextHandler('цифрй', document.getElementById('still'))
          }
          onMouseLeave={() =>
            props.scrambleTextHandler('Still', document.getElementById('still'))
          }
        >
          <h2 id='still'>Still</h2>
        </div>
      </Link>
      <Link to='/digital/motion'>
        <div
          className='subpage__card'
          onMouseOver={() =>
            props.scrambleTextHandler(
              'цифой',
              document.getElementById('motion')
            )
          }
          onMouseLeave={() =>
            props.scrambleTextHandler(
              'Motion',
              document.getElementById('motion')
            )
          }
        >
          <h2 id='motion'>Motion</h2>
        </div>
      </Link> */}
      {/* <Link>
        <div className='subpage__card'>
          <h1>3d</h1>
        </div>
      </Link>
      <Link>
        <div className='subpage__card'>
          <h1>art</h1>
        </div>
      </Link> */}
      {props.analog && (
        <>
          <Link to='/analog/still'>
            <div
              className='subpage__card'
              onMouseOver={() =>
                props.scrambleTextHandler(
                  'цифрй',
                  document.getElementById('still')
                )
              }
              onMouseLeave={() =>
                props.scrambleTextHandler(
                  'Still',
                  document.getElementById('still')
                )
              }
            >
              <h2 id='still'>Still</h2>
            </div>
          </Link>
          <Link to='/analog/motion'>
            <div
              className='subpage__card'
              onMouseOver={() =>
                props.scrambleTextHandler(
                  'цифой',
                  document.getElementById('motion')
                )
              }
              onMouseLeave={() =>
                props.scrambleTextHandler(
                  'Motion',
                  document.getElementById('motion')
                )
              }
            >
              <h2 id='motion'>Motion</h2>
            </div>
          </Link>
        </>
      )}
    </div>
  );
};

export default Subpage;
