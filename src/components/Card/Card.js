import React from 'react';
import './card.css';
import { HiStar } from 'react-icons/hi';

const Card = ({ img }) => {
  return (
    <div className='card'>
      <div className="card__container">
        <div className="card__img">
          <img src={img} alt="img" />
        </div>
        <div className="card__body">
          <div className="body__top">
            <span>Desert king</span>
            <span>1MBT per night</span>
          </div>
          <div className="body__middle">
            <span className="card__dist">2345km away</span>
            <span className="card__avail">available for 2weeks stay</span>
          </div>
          <div className="body__bottom">
            <HiStar />
            <HiStar />
            <HiStar />
            <HiStar />
            <HiStar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
