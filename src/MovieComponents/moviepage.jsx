import React, { useState } from "react";
import AddMovie from "./addmovie";
import MovieList from "./movielist";

const MoviePage = () => {
  const [movieList, setStateMovieList] = useState(() => {
    return { movies: ["Die Hard", "Harry Potter"] };
  });

  const addMovieHandler = (newMovieName) => {
    setStateMovieList((prevState) => {
        return{
          ...prevState, 
          movies: prevState.movies.concat([newMovieName])
        }
    })
  }

  return (
    <div className="container col-12 col-md-6 my-3 border">
      <AddMovie AddMovieHandler = {addMovieHandler} />
      <MovieList movies={movieList.movies} />
    </div>
  );
};

export default MoviePage;
