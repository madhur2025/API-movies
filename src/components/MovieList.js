import React from 'react';
import MovieCard from './MovieCard';
import '../styles/MovieList.css';

// movie as prop from App
// props is (short of properties) are a way to pass data from a parent component to it's child component (they are act like argument to a function )

const MovieList = ({ movies }) => {

  if (movies.length === 0) return <p>No movies found.</p>;

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        // it renders movie card for each movie
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;

// import React from 'react';
// import MovieCard from './MovieCard';

// function MovieList({ movies, onMovieClick }) {
//   return (
//     <div className="movie-list">
//       {movies.map((movie) => (
//         <MovieCard key={movie.imdbID} movie={movie} onClick={() => onMovieClick(movie.imdbID)} />
//       ))}
//     </div>
//   );
// }

// export default MovieList;