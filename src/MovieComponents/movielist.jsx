import React from "react";

const MovieList = (props) => {
  return (
    <div className="text-black">
      {props.movies.map((movie, index) => {
        return <div key={index}>{movie}</div>;
      })}
    </div>
  );
};

export default MovieList;
