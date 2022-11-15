import React from 'react';
import logo from '../../assets/icons/Logo_F.svg';
import facebook from '../../assets/icons/facebook.svg';
import instagram from '../../assets/icons/insta.svg';
import twitter from '../../assets/icons/twitter.svg';

import './footer.css';

const Footer = () => {
  return (
    <div className="footer__container">
      <footer>
        {/* barnd  */}
        <div className="footer__brand">
          <div className="brand__logo">
            <img src={logo} alt="footer__logo" />
          </div>
          <div className="brand__social">
            <img src={facebook} alt="facebook" />
            <img src={instagram} alt="instagram" />
            <img src={twitter} alt="twitter" />
          </div>
          <p>&copy;2022 Metabnb</p>
        </div>
        {/* community  */}
        <div className="footer__community">
          <p>Community</p>
          <ul>
            <li>NFT</li>
            <li>Tokens</li>
            <li>Landlords</li>
            <li>Discord</li>
          </ul>
        </div>
        {/* Places  */}
        <div className="footer__places">
        <p>Places</p>
          <ul>
            <li>Castle</li>
            <li>Farms</li>
            <li>Beach</li>
            <li>Learn more</li>
          </ul>
        </div>
        <div className="footer__about">
        <p>About us</p>
          <ul>
            <li>Road map</li>
            <li>Creators</li>
            <li>Carrer</li>
            <li>Contact us</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
