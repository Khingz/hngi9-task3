import React from 'react';
import { Welcome, Sponsor, Discover, CardSection } from '../../components';


const Home = ({toggleClose}) => {
  return (
    <div onClick={toggleClose}>
      <Welcome />
      <Sponsor />
      <CardSection />
      <Discover />
    </div>
  )
};

export default Home;
