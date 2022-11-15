import React from 'react';
import Card from '../../components/Card/Card';
import data from '../../data.json';
import setting_icon from '../../assets/icons/settings.svg';

import './place.css';

const Place = ({ toggleClose }) => {
  return (
    <div className="place" onClick={toggleClose}>
      <div className="place__container">
        <div className="place__title">
          <ul>
            <li className='desktop__list'>
              <p>Restaurant</p>
            </li>
            <li className='desktop__list'>
              <p>Cottage</p>
            </li>
            <li className='desktop__list'>
              <p>Castle</p>
            </li>
            <li className='desktop__list'>
              <p>Fantasy city</p>
            </li>
            <li className='desktop__list'>
              <p>beach</p>
            </li>
            <li className='desktop__list'>
              <p>Carbins</p>
            </li>
            <li className='desktop__list'>
              <p>Off-grid</p>
            </li>
            <li className='desktop__list'>
              <p>Farm</p>
            </li>

            {/* title mobile  */}
            <div className="mobile__title">
              <select>
                <option>Restaurant</option>
                <option>Cottage</option>
                <option>Castle</option>
                <option>Ford</option>
                <option>Fantsy city</option>
                <option>beach</option>
                <option>Carbins</option>
                <option>Off-grid</option>
                <option>Farm</option>
              </select>
            </div>

            {/* end of title mobile  */}
            <li>
              <button>
                <span>Location</span>
                <img src={setting_icon} alt="setting-icon" />
              </button>
            </li>
          </ul>
        </div>

        <div className="place__body">
          <div className="place__content">
            {data.map((item, index) => (
              <Card img={item.img} key={index} className="card__item" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Place;
