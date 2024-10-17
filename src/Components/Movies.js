import React from 'react';
import Header from "./Header";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import { useEffect, useState } from "react";
import { fetchMovies } from "../API Store/OMDB";;


const Movies = () => {
  const [Movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    handleSearch();
  }, []);

const handleSearch = async (searchTerm = "") => {
    try {
      setIsLoading(true);
      const data = await fetchMovies(searchTerm);
      setMovies(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching Movies:", error);
      setError(error.message);
      setIsLoading(false);
    }
  };

  return (
    <div className="movie">
      <Header />
      <div className=" text-center font-bold"></div>
      <Header />
      <SearchBar onSearch={handleSearch} isLoading={isLoading} error={error} />
      <MovieList Movies={Movies} />
    </div>
    
  );
};

export default Movies;
