export const getMovies = async () => {

  const res = await fetch("https://api.sampleapis.com/movies/animation")
  const data = await res.json()

  // 🎬 əvvəlcə datanı düzəldirik
  const movies = data.map(movie => ({
    id: movie.id,
    title: movie.title,
    posterURL: movie.posterURL || movie.poster || "https://via.placeholder.com/300x450"
  }))

  // 🎥 sonra trailer əlavə edirik
  const movieswithTrailer = movies.map(movie => {

    let youtubeId = null
    const title = movie.title.toLowerCase()

    if (title.includes("toy")) {
      youtubeId = "KYz2wyBy3kc"
    } 
    else if (title.includes("shrek")) {
      youtubeId = "TbQm5doF_Uc"
    } 
    else if (title.includes("frozen")) {
      youtubeId = "TbQm5doF_Uc"
    }

    return {
      ...movie,
      youtubeId
    }

  })

  return movieswithTrailer
}
export const getMovieById = async (id) => {

  const movies = await getMovies()
  const movie = movies.find((m) => m.id === parseInt(id))

  return movie
}