import axios from 'axios';

const BASE_URL = 'https://www.omdbapi.com/';
const API_KEY = '13e332f5'; // Replace with your actual OMDb API key

const handleError = (error) => {
  console.error('Error fetching data:', error);
  throw error; // Re-throw the error for further handling (optional)
};

export const fetchMovies = async (searchTerm) => {
  try {
    const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&s=${searchTerm}`);
    return response.data.Search || []; // Handle empty response gracefully
  } catch (error) {
    handleError(error);
  }
};

export const fetchMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&i=${movieId}`);
    return response.data || null; // Handle empty response gracefully
  } catch (error) {
    handleError(error);
  }
};