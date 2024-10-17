import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import MovieList from "./Components/MovieList";
import MovieDetails from "./Components/MovieDetails";
// import MovieCard from "./Components/MovieCard";
import Movies from "./Components/Movies";
import Home from './Components/Home';
import Footer from './Components/Footer';
const App = () => {
  return (
    <BrowserRouter>
      <div className=" mx-auto ">
        <div className=" text-center font-bold font-serif"></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Movies" element={<Movies />} />
          <Route path="/Movies/:movieId" element={<MovieDetails />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
