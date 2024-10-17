import React from 'react';
import { useState } from "react";
import './MovieCSS.css'; // Import styles
//import { Link } from "react-router-dom";
import Header from './Header';

const SearchBar = ({ onSearch }) => {
const [searchTerm, setSearchTerm] = useState("");
const [showPrompt, setShowPrompt] = useState(false);

const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchTerm === "") {
      setShowPrompt(true);
      return;
    }

    onSearch(searchTerm);
    setSearchTerm("");
    setShowPrompt(false);
  };

  return (
    <>
    <Header />
     
      <form onSubmit={handleSearchSubmit} className="search-bar-container"> 
        <input
          type="text"
          placeholder="Search Movies You Like to See ..."
          className="search-bar-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" className="search-bar-button">
          Search
        </button>
      </form>
      {showPrompt && (
        <p className="search-bar-prompt">
          Please Enter the Title of the Movie....
        </p>
      )}
    </>
  );
};

export default SearchBar;