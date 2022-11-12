import React from 'react';
import meta from '../../assets/icons/Ellipse 7.svg';
import opensea from '../../assets/icons/OpenSea.svg';
import MBToken from '../../assets/icons/MBToken.svg';

const Sponsor = () => {
  return (
    <div className="sponsor__container">
      <div>
        <img src={MBToken} alt="mbtoken" />
      </div>
      <div>
        <img src={meta} alt="metatoken" />
      </div>
      <div>
        <img src={opensea} alt="opensea" />
      </div>
    </div>
  );
};

export default Sponsor;
