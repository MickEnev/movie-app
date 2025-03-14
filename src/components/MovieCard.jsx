import React from 'react'
import "../css/MovieCard.css"

export default function ({movie}) {

    function onLike() {
        alert("clicked")
    }

  return (
    <div className="movieCard">
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
            <div className="movie-overlay">
                <button className="favorite-btn" onClick={onLike}> :3 </button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date?.split("-")[0]}</p>
        </div>
    </div>
  )
}
