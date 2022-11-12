import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo_icon from '../../assets/icons/logo_icon.svg';
import logo_name from '../../assets/icons/logo_icon_name.svg';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { HiOutlineX } from 'react-icons/hi';

import './nav.css';

const Nav = ({open}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMobileConnect = () => {
    setMenuOpen(false)
    open();
  }

  return (
    <div className="nav__container">
      <div className="logo__section">
        <img src={logo_icon} alt="logo_icon" className="logo__icon" />
        <img src={logo_name} alt="logo_name" />
      </div>
      <div className="link__section">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/places">Place to stay</NavLink>
          </li>
          <li>
            <NavLink to="#">NFTs</NavLink>
          </li>
          <li>
            <NavLink to="#">Community</NavLink>
          </li>
        </ul>
      </div>
      <div className="connect__section">
        <button onClick={open}>Connect wallet</button>
      </div>
      <div className="mobile__menu">
        {menuOpen ? (
          <HiOutlineX onClick={() => setMenuOpen(false)} />
        ) : (
          <HiOutlineMenuAlt1 onClick={() => setMenuOpen(true)} />
        )}

        {/* Mobile Link */}
        <div
          className={
            menuOpen
              ? 'mobile__menu__container'
              : 'mobile__menu__container hide'
          }
        >
          <ul>
            <li>
              <NavLink to="/" onClick={() => setMenuOpen(false)}>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/places" onClick={() => setMenuOpen(false)}>
                Place to stay
              </NavLink>
            </li>
            <li>
              <NavLink to="#" onClick={() => setMenuOpen(false)}>
                NFTs
              </NavLink>
            </li>
            <li>
              <NavLink to="#" onClick={() => setMenuOpen(false)}>
                Community
              </NavLink>
            </li>
          </ul>
          <div className="connect__section__mobile" onClick={open}>
            <button onClick={handleMobileConnect}>Connect wallet</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
