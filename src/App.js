import React, { useState } from "react";
import "./App.css"
import MovieList from "./MovieList";
import AddMovie from "./AddMovie";
import NavBar from "./NavBar";
import { moviesData } from "./data";


function App () {
	const [movies, setMovies] = useState(moviesData);
  const [searchTitle, setSearchTitle] = useState("");  
  const [searchRating, setSearchRating] = useState(0);

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  }

  return(
  <div className="App">
    <header className="App-header">
      <NavBar setSearchTitle={setSearchTitle} setSearchRating={setSearchRating}/>
      <br/> 
      <AddMovie addMovie={addMovie} />
      <br/> 
      <MovieList movies={movies} searchTitle={searchTitle} searchRating={searchRating} />
    </header>
  </div>
  );
};

export default App;