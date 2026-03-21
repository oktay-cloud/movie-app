import { useEffect, useState } from "react"
import MovieCard from "../components/MovieCard"
import { getMovies } from "../services/api"
import { Link } from "react-router-dom"

function Home({favorites, setFavorites}){

const [movies,setMovies] = useState([])
const [search, setSearch] = useState("")

useEffect(()=>{
  const loadMovies = async ()=>{
    const data = await getMovies()
    setMovies(data)
  }
  loadMovies()

},[])

const toggleFavorite = (movie) => {

  const exists = favorites.find(f => f.id === movie.id)

  if (exists) {
    setFavorites(favorites.filter(f => f.id !== movie.id))
  } else {
    setFavorites([...favorites, {
      id: movie.id,
      title: movie.title,
      posterURL: movie.posterURL || movie.poster ||  "https://placehold.co/300x450?text=No+Image"
    }])

  }
}

 // axtarış filtri
const filteredMovies = movies.filter(movie =>
  movie.title.toLowerCase().includes(search.toLowerCase())
)

return(
  <div>

    <h1>🎬 Movie App</h1>

     {/* Search input */}
     <input
       type="text"
       placeholder= "🔎 Search movie..."
       value={search}
       onChange={(e) => setSearch(e.target.value)}
       className="search"
       />

    <div className="movies">
      {filteredMovies.slice(0,12).map(movie=>(
        <MovieCard 
        key={movie.id} 
        movie={movie}
        toggleFavorite={toggleFavorite}
        favorites={favorites}
        />
      ))}
       <Link to="/favorites" className="favorites-link">❤️ Favorites</Link>
    </div>
    
  </div>
)

}

export default Home