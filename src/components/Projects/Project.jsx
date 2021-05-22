import React, { useEffect, useState } from 'react';
//react-router
import { Link } from 'react-router-dom';
//components
import ScrollButton from '../Home/ScrollButton';
//json
import imagesData from '../../imagesData.json';

const Project = () => {
  const [data, setData] = useState([]);

  let windowLocation = window.location.pathname.split('/');

  useEffect(() => {
    setData(
      imagesData.items.filter(
        (x) => x.client === windowLocation[windowLocation.length - 1]
      )
    );
  }, []);
  console.log(window.location.pathname);
  return (
    <React.Fragment>
      <div className='project'>
        {data &&
          data.map((image) => {
            return (
              <div className='project__card' key={image.id}>
                <img src={image.url} alt={`image-${image.id}`} />
              </div>
            );
          })}
      </div>
      <ScrollButton />
    </React.Fragment>
  );
};
export default Project;
