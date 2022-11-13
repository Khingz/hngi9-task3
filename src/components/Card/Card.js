import React from 'react';
import './card.css';

const Card = ({ img }) => {
  return (
    <div className='card__container'>
      <div className="card__img">
        <img src={img} alt="img" />
      </div>
      <div className="card__body">
        <div className="body__top">
          <p>Desert king</p>
          <p>1MBT per night</p>
        </div>
        <div className="body__middle">
          <p className="card__dist">2345km away</p>
          <p className="card__avail">available for 2weeks stay</p>
        </div>
        <div className="body__bottom"></div>
      </div>
    </div>
  );
};

export default Card;
