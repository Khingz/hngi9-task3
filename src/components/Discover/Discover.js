import React from 'react';
import discover_img from '../../assets/images/discover_image.svg';

import './discover.css';

const Discover = () => {
  return (
    <div className='discover'>
      <div className="discover__container">
        <div className="discover__left">
          <h2>Metabnb NFTs</h2>
          <p>
            Discover our NFT gift cards collection. Loyal customers gets amazing
            gift cards which are traded as NFTs. These NFTs gives our cutomer
            access to loads of our exclusive services.
          </p>
          <button>Learn more</button>
        </div>
        <div className="discover__right">
          <div>
            <img src={discover_img} alt="discover_image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
