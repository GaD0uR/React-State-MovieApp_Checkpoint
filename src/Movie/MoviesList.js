import React, { useState } from "react";
import MovieItem from "./MovieItem";
import "./movie.css";

const MoviesList = ({ moviesList, nameSearch }) => {
  return (
    <div className="movies-list">
      <div className="row">
        {moviesList
          .filter((movie) =>
            movie.name.toLowerCase().includes(nameSearch.toLowerCase())
          )
          .map((el, i) => (
            <MovieItem key={i} movie={el} />
          ))}
      </div>
    </div>
  );
};

export default MoviesList;
