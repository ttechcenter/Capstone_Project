import React from 'react';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../API Store/OMDB";
import { Link } from "react-router-dom";
import  './MovieCSS.css';
const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [error,   
   setError] = useState(null);
  
    useEffect(() => {
      const fetchMovie = async () => {
        try {
          setIsLoading(true);
          const data = await   
   fetchMovieDetails(movieId);
          setMovie(data);
          setIsLoading(false);
        } catch (error) {
          console.error("Error fetching movie details:", error);
          setError(error.message);
          setIsLoading(false);
        }
      };
  
      fetchMovie();
    }, [movieId]);
  
    if (isLoading) {
      return <p>Loading...</p>;
    }
  
    if (error) {
      return <p>Error fetching movie details: {error}</p>;
    }
  
    return (
      <div className="movie-details-container sm:mx-auto py-8 px-5 text-center">
        <div className="text-left">
          <Link to="/movies">
            <button className="back-button bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white px-4 py-2 rounded-md transition ease-in-out delay-100 duration-700 hover:scale-110 ">
              Back to Movie List
            </button>
          </Link>
        </div>
  
        <h1 className="movie-title text-5xl font-bold text-center my-6 font-Tangerine">
          {movie.Title}
        </h1>
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="movie-poster w-full h-80 object-cover rounded-lg mb-8 shadow-lg shadow-purple-200/40 md:h-100"
        />
  
        <div className="movie-details-info flex justify-between p-6 mb-7 rounded-md border border-pink-500 text-center">
          <div>
            <h2 className="font-bold md:ml-10">Release Year</h2>
            <p>{movie.Year}</p>
          </div>
          <div>
            <h2 className="font-bold">Genre</h2>
            <p>{movie.Genre}</p>
          </div>
          <div>
            <h2 className="font-bold md:mr-10">Rating</h2>
            <p>{movie.imdbRating}</p>
          </div>
        </div>
  
        <div className="movie-details-content p-4 bg-gradient-to-r from-purple-200 to-pink-100 rounded-lg shadow-lg shadow-purple-500/40 overflow-hidden  mb-4  md:mx-2">
          <div className="movie-details-plot shadow-lg pb-6 mb-3 rounded-sm">
            <h2 className="text-2xl font-bold mb-4">Plot</h2>
            <p>{movie.Plot}</p>
          </div>
  
          {movie.Actors && (
            <div className="movie-details-cast shadow-lg pb-6 rounded-sm px-4">
              <h2 className="text-2xl font-bold my-5">Cast</h2>
              <ul className="pl-5">
                {movie.Actors.split(", ").map((actor, index) => (
                  <li key={index}>{actor}</li>
                ))}
              </ul>
            </div>
          )}
  
          {movie.Director && (
            <div className="movie-details-director shadow-lg pb-6 rounded-sm px-4">
              <h2 className="text-2xl font-bold my-5">Director</h2>
              <p>{movie.Director}</p>
            </div>
          )}
  
          {movie.Writer && (
            <div className="movie-details-writer shadow-lg pb-6 rounded-sm px-4">
              <h2 className="text-2xl font-bold my-5">Writer</h2>
              <p>{movie.Writer}</p>
            </div>
          )}
  
          {movie.Awards && (
            <div className="movie-details-awards shadow-lg pb-6 rounded-sm px-4">
              <h2 className="text-2xl font-bold my-5">Awards</h2>
              <p>{movie.Awards}</p>
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default MovieDetails;