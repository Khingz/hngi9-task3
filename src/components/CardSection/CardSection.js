import React from 'react';
import data from '../../data.json';
import Card from '../Card/Card';

import './cardsection.css'

const CardSection = () => {
    const featured = data.filter(item => item.featured === true);
    
  return (
    <div className='cardSection'>
        <div className="cardSection__container">
            <h3>Inspiration for your next adventure</h3>
            <div className="card__display__section">
                {featured.map((item, index) => (
                    <Card key={index} img={item.img}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default CardSection