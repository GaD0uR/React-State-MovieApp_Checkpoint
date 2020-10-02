import React, { useState } from "react";
import "./App.css";
import { moviesData } from "./Movie/MoviesData";
import Header from "./Movie/Header";
import MoviesList from "./Movie/MoviesList";

function App() {
  const [moviesList, setMoviesList] = useState(moviesData);
  const [nameSearch, setNameSearch] = useState("");

  const addNewMovie = (e, newMovie) => {
    e.preventDefault();
    setMoviesList([...moviesList, newMovie]);
  };

  return (
    <div className="App">
      <Header setNameSearch={setNameSearch} addNewMovie={addNewMovie}></Header>
      <div className="content-wrapper">
        <MoviesList
          nameSearch={nameSearch}
          moviesList={moviesList}
        ></MoviesList>
      </div>
    </div>
  );
}

export default App;
