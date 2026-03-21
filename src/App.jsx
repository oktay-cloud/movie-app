import './App.css'
import Home from './pages/Home'
import MovieDetail from "./pages/MovieDetail"
import Favorites from "./pages/Favorites"

import { Routes, Route } from "react-router-dom"
import { useEffect, useState } from 'react'

function App() {

  const [favorites, setFavorites] = useState([])

  // 🔥 LocalStorage-dan oxu (ilk açılışda)
  useEffect(() => {

    const saved = localStorage.getItem("favorites")
    
    if (saved) {
      setFavorites(JSON.parse(saved))
    }
  },[])

  // 🔥 Hər dəyişəndə yadda saxla
  useEffect(() => {

    localStorage.setItem("favorites", JSON.stringify(favorites))
    
  },[favorites])

  return(

      <Routes>

       <Route 
       path="/"
       element={<Home favorites={favorites} setFavorites={setFavorites} />}
       />

      <Route path="/movie/:id" element={<MovieDetail/>} />

      <Route
      path="/favorites"
      element={<Favorites favorites={favorites} setFavorites={setFavorites}/>}
      />

      </Routes>
    
  );
}

export default App;
