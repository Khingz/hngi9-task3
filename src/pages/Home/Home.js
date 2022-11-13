import React from 'react';
import { Welcome, Sponsor, Discover } from '../../components';

const Home = ({toggleClose}) => {
  return (
    <div onClick={toggleClose}>
      <Welcome />
      <Sponsor />
      <Discover />
    </div>
  )
};

export default Home;
