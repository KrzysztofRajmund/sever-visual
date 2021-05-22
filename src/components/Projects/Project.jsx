import React, { useEffect, useState } from 'react';
//react-router
import { Link } from 'react-router-dom';
//components
import ScrollButton from '../Home/ScrollButton';
//json
import imagesData2 from '../../imagesData2.json';
import imageTest from '../../assets/img/phix-2.jpg';
const Project = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <React.Fragment>
      {loading ? (
        'loading'
      ) : (
        <div className='project'>
          {imagesData2.images.map((image) => {
            return (
              <div key={image.id} className='gallery-image'>
                <img src={image.url} alt={`image-${image.id}`} />
              </div>
            );
          })}
          {/* <div className='project__card'>
          <img src={image} alt='' />
        </div> */}
        </div>
      )}

      <ScrollButton />
    </React.Fragment>
  );
};

export default Project;
