import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";

function Favorites({ favorites, setFavorites }) {

  const toggleFavorite = (movie) => {
    const exists = favorites.find(f => f.id === movie.id);

    if (exists) {
      setFavorites(favorites.filter(f => f.id !== movie.id));
    } else {
      setFavorites([...favorites, movie]);
    }
  };

  return (
    <div>
      <Link to="/">
        <button>⬅ Back to Home</button>
      </Link>

      <h1>❤️ Favorite Movies</h1>

      <div className="movies">
        {favorites.length === 0 ? (
          <p>No favorites yet 😢</p>
        ) : (
          favorites.map(movie => (
            <MovieCard
              key={movie.id}
              movie={movie}
              toggleFavorite={toggleFavorite}
              favorites={favorites}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Favorites;