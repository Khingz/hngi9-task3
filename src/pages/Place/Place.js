import React from 'react';
import Card from '../../components/Card/Card';
import data from '../../data.json';
import setting_icon from '../../assets/icons/settings.svg';

import './place.css';

const Place = () => {
  return (
    <div className="place">
      <div className="place__container">
        <div className="place__title">
          <ul>
            <li>
              <p>Restaurant</p>
            </li>
            <li>
              <p>Cottage</p>
            </li>
            <li>
              <p>Castle</p>
            </li>
            <li>
              <p>Fantasy city</p>
            </li>
            <li>
              <p>beach</p>
            </li>
            <li>
              <p>Carbins</p>
            </li>
            <li>
              <p>Off-grid</p>
            </li>
            <li>
              <p>Farm</p>
            </li>
            <li>
              <button>
                <span>Location</span>
                <img src={setting_icon} alt="setting-icon" />
              </button>
            </li>
          </ul>
        </div>
        <div className="place__body">
          <Card img={data[0].img}/>
        </div>
      </div>
    </div>
  );
};

export default Place;
