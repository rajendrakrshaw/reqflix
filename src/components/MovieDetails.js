// src/components/MovieDetails.js
import React from 'react';

const MovieDetails = ({ movie }) => {
  return (
    <div className="p-4">
      <h2 className="text-3xl font-semibold mb-4">{movie.title}</h2>
      <p className="text-lg text-gray-700">{movie.synopsis}</p>
      {/* Add more details like cast, crew, etc. */}
    </div>
  );
};

export default MovieDetails;
