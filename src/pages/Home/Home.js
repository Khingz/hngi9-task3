import React from 'react';
import { Welcome, Sponsor } from '../../components';

const Home = ({toggleClose}) => {
  return (
    <div onClick={toggleClose}>
      <Welcome />
      <Sponsor />
    </div>
  )
};

export default Home;
