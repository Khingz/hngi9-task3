import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo_icon from '../../assets/icons/logo_icon.svg';
import logo_name from '../../assets/icons/logo_icon_name.svg';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { HiOutlineX } from 'react-icons/hi';

import './nav.css';

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="nav__container">
      <div className="logo__section">
        <img src={logo_icon} alt="logo_icon" className="logo__icon" />
        <img src={logo_name} alt="logo_name" />
      </div>
      <div className="link__section">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/places">Place to stay</Link>
          </li>
          <li>
            <Link to="#">NFTs</Link>
          </li>
          <li>
            <Link to="#">Community</Link>
          </li>
        </ul>
      </div>
      <div className="connect__section">
        <Link>Connect wallet</Link>
      </div>
      <div className="mobile__menu">
        {menuOpen ? <HiOutlineX onClick={() => setMenuOpen(false)}/> : <HiOutlineMenuAlt1 onClick={() => setMenuOpen(true)} />}

        {/* Mobile Link */}
      <div className={menuOpen ? "mobile__menu__container" : "mobile__menu__container hide"}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/places">Place to stay</Link>
          </li>
          <li>
            <Link to="#">NFTs</Link>
          </li>
          <li>
            <Link to="#">Community</Link>
          </li>
        </ul>
        <div className="connect__section__mobile">
          <Link>Connect wallet</Link>
        </div>
      </div>
      </div>

      
    </div>
  );
};

export default Nav;
