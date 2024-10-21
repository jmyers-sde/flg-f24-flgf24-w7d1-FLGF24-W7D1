import React, { useState, useEffect } from 'react';

function MovieNightPlanner() {
  const [movies, setMovies] = useState([]);
  const [newMovie, setNewMovie] = useState('');
  const [selectedMovie, setSelectedMovie] = useState('');

  useEffect(() => {
    const storedMovies = localStorage.getItem('movies');
    if (storedMovies) {
      setMovies(JSON.parse(storedMovies));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(movies));
  }, [movies]);

  const addMovie = () => {
    if (newMovie.trim() !== '') {
      setMovies([...movies, newMovie.trim()]);
      setNewMovie('');
    }
  };

  const pickMovie = () => {
    if (movies.length > 0) {
      const randomIndex = Math.floor(Math.random() * movies.length);
      setSelectedMovie(movies[randomIndex]);
    }
  };

  return (
    <div>
      <h1>Movie Night Planner</h1>
      <input
        type="text"
        placeholder="Add new movie"
        value={newMovie}
        onChange={(e) => setNewMovie(e.target.value)}
      />
      <button onClick={addMovie}>Add Movie</button>
      <button onClick={pickMovie}>Pick a Movie</button>
      <h2>Selected Movie: {selectedMovie}</h2>
      <h3>Watchlist:</h3>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>{movie}</li>
        ))}
      </ul>
    </div>
  );
}

export default MovieNightPlanner;