import { Link } from "react-router-dom"

function MovieCard({movie, toggleFavorite, favorites}){

  const isFavorite = favorites.some(f => f.id === movie.id)

  const NO_IMAGE = "https://placehold.co/300x450?text=No+Image";

return(
<div className="card">
  <Link to={`/movie/${movie.id}`}>
    <img 
      src={movie.posterURL} 
      alt={movie.title}
      onError={(e) => { e.target.onerror = null; e.target.src = NO_IMAGE; }}  
    />
  </Link>

  <div className="movie-info">
    <h3>{movie.title}</h3>
    <p>{movie.year || movie.release_date?.slice(0,4)}</p>
  </div>

  {/* Favorite button */}
  <button 
    onClick={() => toggleFavorite(movie)}
    className="favorite-button"
  >
    {isFavorite ? "❤️" : "🤍"}
  </button>
</div>

)

}

export default MovieCard