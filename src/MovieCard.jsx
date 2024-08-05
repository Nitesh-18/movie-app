import React from "react";

const MovieCard = ({movie}) => {
  return (
    <div className="movie">
      <div>
        <p>{movie.Year}</p>
      </div>
      <div>
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "http://via.placeholder.com/400"
          }
          alt="Movie Poster"
        />
      </div>
      <div>
        <span>{movie.Type}</span>
        <h2>{movie.Title}</h2>
      </div>
    </div>
  );
};

export default MovieCard;