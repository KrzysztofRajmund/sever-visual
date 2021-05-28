import React from 'react';

//components
import ScrollButton from '../Home/ScrollButton';

import image from '../../assets/digital-image3.JPG';

const TalesArticle = () => {
  return (
    <React.Fragment>
      <div className='tales-article'>
        <div className='tales-article__card'>
          <img src={image} alt='image-article' />
          <article>I am article bahahahahahaha</article>
        </div>
      </div>
      <ScrollButton />
    </React.Fragment>
  );
};
export default TalesArticle;
