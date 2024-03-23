// src/pages/MovieDetailsPage.js
import React from 'react';
import MovieDetails from '../components/MovieDetails';

const movieDetails = {
  id: 1,
  title: 'Movie 1',
  synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  // Add more details
};

const MovieDetailsPage = () => {
  return (
    <div>
      <MovieDetails movie={movieDetails} />
    </div>
  );
};

export default MovieDetailsPage;
