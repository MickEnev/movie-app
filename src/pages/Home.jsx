import React from 'react'
import MovieCard from '../components/MovieCard'

export default function Home() {
    const movies = [
        {id: 1, title: "Pirates", release_date: "2009"},
        {id: 2, title: "Ninjas", release_date: "2019"},
        {id: 3, title: "Tigers", release_date: "2017"},
    ]

    const handleSearch = () => {};

  return (
    <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type='text' placeholder='Search movies...' className='search-input'/>
            <button type="submit" className="search-button">Search</button>
        </form>

        <div className="movies-grid">
            {movies.map(movie => (
            <MovieCard movie={movie} key={movie.id}/>
            ))}
        </div>
    </div>
  )
}
