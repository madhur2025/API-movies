import React, { useState } from 'react';
import '../styles/MovieCard.css';

const MovieCard = ({ movie }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!isFavorite) {
      favorites.push(movie);
    } else {
      favorites = favorites.filter((fav) => fav.imdbID !== movie.imdbID);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
  };

  return (
    <div className="movie-card">
      <img src={movie.Poster} alt={movie.Title} />
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
      {/* <p>{movie.Genre}</p> */}
      {/* <button onClick={handleFavorite}>{isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}</button> */}
    </div>
  );
};

export default MovieCard;