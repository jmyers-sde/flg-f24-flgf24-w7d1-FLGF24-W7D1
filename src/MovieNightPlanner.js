import React, { useState, useEffect } from 'react';

function MovieNightPlanner() {
  // TODO: Initialize state for movies, newMovie, and selectedMovie
  // Hint: Use the useState hook
  
  // TODO: Implement useEffect to load movies from localStorage
  useEffect(() => {
    // Add your code here
  }, []);

  // TODO: Implement useEffect to save movies to localStorage
  useEffect(() => {
    // Add your code here
  }, [/* TODO: Add dependency */]);

  const addMovie = () => {
    // TODO: Implement addMovie function
    // Hint: Check if newMovie is not empty, add it to movies, and clear the input
  };

  const pickMovie = () => {
    // TODO: Implement pickMovie function
    // Hint: Randomly select a movie from the movies array
  };

  return (
    <div>
      <h1>Movie Night Planner</h1>
      <input
        type="text"
        placeholder="Add new movie"
        // TODO: Add value and onChange props
      />
      <button onClick={addMovie}>Add Movie</button>
      <button onClick={pickMovie}>Pick a Movie</button>
      <h2>Selected Movie: {/* TODO: Display selectedMovie */}</h2>
      <h3>Watchlist:</h3>
      <ul>
        {/* TODO: Render list of movies */}
        {/* Hint: Use movies.map() to render each movie */}
      </ul>
    </div>
  );
}

export default MovieNightPlanner;
