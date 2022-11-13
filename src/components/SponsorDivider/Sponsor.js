import React from 'react';
import mb_logo from '../../assets/icons/mbtoken.png';
import meta_logo from '../../assets/icons/metamask.png';
import opensea_logo from '../../assets/icons/opensea.png';

import './sponsor.css'


const Sponsor = () => {
  return (
    <div className="sponsor__container">
      <div className="mb container">
        <img src={mb_logo} alt="mblogo" />
      </div>
      <div className="meta container">
        <img src={meta_logo} alt="metalogo" />
      </div>
      <div className="opensea container">
        <img src={opensea_logo} alt="opensealogo" />
      </div>
    </div>
  );
};

export default Sponsor;
