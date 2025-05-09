import React from 'react'
import "../css/Favorites.css"
import { useMovieContext } from '../components/contexts/MovieContext'
import MovieCard from '../components/MovieCard'

export default function Favorites() {
  const {favorites} = useMovieContext();

  if (favorites) {
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>
        <div className="movies-grid">
                  {favorites.map(movie => (
                      <MovieCard movie={movie} key={movie.id}/>)
                  )}
              </div>
      </div>
    )
  }

  return (
    <div className="favorites-empty">
        <h2>No Favorite Movies Yet</h2>
        <p>Start adding some favorites...</p>
    </div>
  )
}
