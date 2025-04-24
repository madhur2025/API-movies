// App.js : this is the main component that manages the application's state.
// key operations : 
// initialize global states (movies, loading, error)
// defin core logics (fetching data, sorting movies)
// render child components (searchbar, movielist)

import React, { useState } from 'react';
import axios from 'axios';
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar';

import './styles/App.css';

function App() {
  // states defin here
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [setSortOrder] = useState('asc'); // new feature for sorting movies by year

  const apiKey = '1bb49e91';

  // function for search movies
  const fetchMovies = async (query) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`https://www.omdbapi.com/?s=${query}&apikey=${apiKey}`);
      if (response.data.Response === 'True') {
        setMovies(response.data.Search);
      } else {
        setMovies([]);
        setError('No results found.');
      }
    } catch (error) {
      setError('An error occurred. Please try again later.');
    }
    setLoading(false);
  };


  // function for sorting movies
  // const sortMoviesByYear = (order) => {
  //   const sortedMovies = [...movies].sort((a, b) => {
  //     const yearA = parseInt(a.Year, 10);
  //     const yearB = parseInt(b.Year, 10);
  
  //     if (order === 'asc') {
  //       return yearA - yearB; // Smaller year comes first
  //     } else {
  //       return yearB - yearA; // Larger year comes first
  //     }
  //   });
  //   setMovies(sortedMovies); // Update the movies list
  // };

  return (

    <div className="App">
      <h1>Movie Search</h1>

      <SearchBar onSearch={fetchMovies}/> 

      {loading && <p>Searching...</p>}
      {error && <p className="error">{error}</p>}
      

      {/* <div className="sorting">
        <button onClick={() => { setSortOrder('asc'); sortMoviesByYear('asc'); }}>
          Oldest first
        </button>
        <button onClick={() => { setSortOrder('desc'); sortMoviesByYear('desc'); }}>
          Letest first
        </button> */}
      {/* </div> */}

      <MovieList movies={movies} />
    </div>
    
  );
}

export default App;