import React, { useState, useEffect, } from 'react';

function MovieNightPlanner() {
  // TODO: Initialize state for movies, newMovie, and selectedMovie
  // Hint: Use the useState hook
  const [movies, setMovies] = useState([]);
  const [newMovie, setNewMovie] = useState('');
  const [selectedMovie, setSelectedMovie] = useState('');

  
  // TODO: Implement useEffect to load movies from localStorage
  useEffect(() => {
    // Add your code here
    const storedMovies = localStorage.getItem('movies');
    if(storedMovies){
      setMovies(JSON.parse(storedMovies))
    }
  }, []);

  // TODO: Implement useEffect to save movies to localStorage
  useEffect(() => {
    // Add your code here
    localStorage.setItem('movies', JSON.stringify(movies))
  }, [movies]);

  const addMovie = () => {
    // TODO: Implement addMovie function
    // Hint: Check if newMovie is not empty, add it to movies, and clear the input
    if(newMovie.trim()){
      setMovies([...movies, newMovie]);
      setNewMovie('');
    }
  };

  const pickMovie = () => {
    // TODO: Implement pickMovie function
    // Hint: Randomly select a movie from the movies array
    const randomIndex = Math.floor(Math.random() * movies.length);
    setSelectedMovie(movies[randomIndex]);
  };

  return (
    <div>
      <h1>Movie Night Planner</h1>
      <input
        type="text"
        placeholder="Add new movie"
        // TODO: Add value and onChange props
        value={newMovie}
        onChange={(e) => setNewMovie(e.target.value)}
      />
      <button onClick={addMovie}>Add Movie</button>
      <button onClick={pickMovie}>Pick a Movie</button>
      <h2>Selected Movie: {{selectedMovie}}</h2>
      <h3>Watchlist:</h3>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>{movie}</li>
        ))}
        {/* Hint: Use movies.map() to render each movie */}
      </ul>
    </div>
  );
}

export default MovieNightPlanner;
