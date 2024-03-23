// src/components/MovieCard.js
import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
      <img src={movie.poster} alt={movie.title} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{movie.title}</h3>
        <p className="text-gray-600">{movie.genre}</p>
      </div>
    </div>
  );
};

export default MovieCard;
