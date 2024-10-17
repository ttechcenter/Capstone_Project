import React from 'react';
// import time from "../assets/images/time.png";
// import good from "../assets/images/good.png";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card relative rounded-lg shadow-lg overflow-hidden">
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="movie-img"
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/70 text-white">
        <h3 className="text-lg font-bold mb-2">{movie.Title}</h3>
        <p className="text-gray-400 mb-4">{movie.Year}</p>
        <div className="flex justify-between">
      </div>
        <Link to={`/movies/${movie.imdbID}`}>
          <button className="movie-btn">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;