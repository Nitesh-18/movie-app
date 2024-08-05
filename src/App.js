import React, { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

const API_URL = "http://www.omdbapi.com?apikey=53ccd971";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [defaultMovies, setDefaultMovies] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    if (data.Search) {
      setMovies(data.Search);
    } else {
      setMovies([]);
    }
  };

  const fetchDefaultMovies = async () => {
    const response = await fetch(`${API_URL}&s=popular`);
    const data = await response.json();
    if (data.Search) {
      setDefaultMovies(data.Search);
    } else {
      setDefaultMovies([]);
    }
  };

  useEffect(() => {
    fetchDefaultMovies();
  }, []);

  const handleSearch = () => {
    if (searchTerm) {
      searchMovies(searchTerm);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="app">
      <h1>MovieStand</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search for a movie"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <img alt="search" src={SearchIcon} onClick={handleSearch} />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.imdbID} />
          ))}
        </div>
      ) : (
        <div className="container">
          {defaultMovies.map((movie) => (
            <MovieCard movie={movie} key={movie.imdbID} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
