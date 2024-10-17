import React from 'react';
import { Link } from "react-router-dom";
import Header from "./Header";
import './MovieCSS.css'; // Import styles

const Home = () => {
  return (
  <div className='mainhome'>
    <Header />
    <div className="home-container">
      <div className="hero-section">
        <h1 className="hero-title">Hey there, Welcome </h1>
        <h1 className="hero-title2">Do you want to Watch Best Movies today?</h1>
        <Link to="/Movies">
          <button className="hero-button">Search and Watch Movies Here...</button>
        </Link>
      </div>
    </div>
  </div>
    
  );
};

export default Home;