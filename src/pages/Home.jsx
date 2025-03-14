import React, { useState, useEffect } from 'react'
import MovieCard from '../components/MovieCard'
import "../css/Home.css"
import { searchMovies, getPopularMovies } from '../services/api'

export default function Home() {
    const [searchQuery, setSearchQuery] = useState("")
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch (err) {
                console.log(err)
                setError("Error fetching movies...")
            } finally {
                setLoading(false)
            }
        }
        loadPopularMovies()
    }, [])

    const handleSearch = (e) => {
        e.preventDefault();
        alert(searchQuery);
    };

  return (
    <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type='text' placeholder='Search movies...' className='search-input' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
            <button type="submit" className="search-button">Search</button>
        </form>

        <div className="movies-grid">
            {movies.map(movie => (
                <MovieCard movie={movie} key={movie.id}/>)
            )}
        </div>
    </div>
  )
}
