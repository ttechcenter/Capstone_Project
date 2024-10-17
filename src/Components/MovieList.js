import React from 'react';
import MovieCard from "./MovieCard";
import './MovieCSS.css'; // Import styles

const MovieList = ({ Movies }) => {
  return (
    <div className="movie-list-container">
      {Movies ? (
        <div className="movie-grid">
          {Movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} className="movie-card" />
          ))}
        </div>
      ) : (
        <div className="text-center font-semibold text-4xl p-6 font-Tangerine">
          <p>
            It seems we could not find any movies similar to what you were
            looking for.
          </p>
          <p>Let's try a different search or our featured movies.</p>
        </div>
      )}
    </div>
  );
};

export default MovieList;