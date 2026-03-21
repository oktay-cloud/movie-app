import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { getMovieById } from "../services/api"


function MovieDetail() {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    const loadMovie = async () => {
      const data = await getMovieById(id)
      setMovie(data)
    }
    loadMovie()
  }, [id])

  if (!movie) {
    return <p>Loading...</p>
  }

  const trailerUrl = movie.youtubeId
    ? `https://www.youtube.com/embed/${movie.youtubeId}`
    : null

  return (
    <div className="movie-detail">

      {/* 🔙 Back button */}
      <Link to="/" className="back-button">
        ⬅ Back to Home
      </Link>

      <h1>{movie.title}</h1>

      <img src={movie.posterURL} alt={movie.title} className="poster"/>

      {movie.year && <p className="year">Year: {movie.year}</p>}

      <h2>🎬 Trailer</h2>
      <div className="trailer">
        {trailerUrl ? ( 
          <iframe
            src={trailerUrl}
            title="Movie Trailer"
            allowFullScreen
          ></iframe>
        ) : (
          <p>Trailer tapılmadı ❌</p>  
        )}
      </div>
    </div>
  )
}

export default MovieDetail