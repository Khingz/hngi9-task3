import React from 'react';
import welcome1 from '../../assets/images/welcome_1.png';
import welcome2 from '../../assets/images/welcome_2.png';
import welcome3 from '../../assets/images/welcome_3.png';
import welcome4 from '../../assets/images/welcome_4.png';

import './welcome.css';

const Welcome = () => {
  return (
    <div className="welcome__container">
      <div className="welcome__left">
        <h3>Rent a <span>Place</span> away from <span>Home</span> in the <span>Metaverse</span></h3>
        <div>
          <p>
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
        </div>

        <div className="welcome__search">
          <input type="search" placeholder='Search for location' />
          <button type="submit">Search</button>
        </div>
      </div>

      <div className="welcome__right">
        <div className="right">
          <div id="welcome__1">
            <img src={welcome1} alt="welcome" />
          </div>
          <div id="welcome__2">
            <img src={welcome2} alt="welcome" />
          </div>
        </div>
        <div className="left">
          <div id="welcome__3">
            <img src={welcome3} alt="welcome" />
          </div>
          <div id="welcome__4">
            <img src={welcome4} alt="welcome" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
