import { useMemo } from "react"

import Miniature from "./Miniature"

import filmData from "../data/top-100-christmas-movies.json"

import { IMovie } from "./CustomDropDown"

function MovieList({
  query,
  handleSelectMovie,
}: {
  query: string
  handleSelectMovie: (movie: IMovie) => void
}) {
  if (query === "") {
    return null
  }

  const filteredMovies = useMemo(() => {
    return filmData.filter((movie) =>
      movie.Title.toLowerCase().includes(query.toLowerCase())
    )
  }, [query])

  return (
    <ul className="MovieList">
      {filteredMovies.map((movie) => (
        <Miniature
          active={true}
          movie={movie}
          movieHandler={handleSelectMovie}
        />
      ))}
    </ul>
  )
}

export default MovieList
