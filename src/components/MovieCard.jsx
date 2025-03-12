import React from 'react'

export default function ({movie}) {

    function onLike() {
        alert("clicked")
    }

  return (
    <div className="movieCard">
        <div className="movie-poster">
            <img src={movie.url} alt={movie.title}/>
            <div className="mvoie-overlay">
                <button className="favorite-btn" onClick={onLike}> :3 </button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
        </div>
    </div>
  )
}
