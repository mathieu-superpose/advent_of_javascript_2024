import { useMemo, useRef, useState } from "react"

import "./CustomDropdown.css"

import dropdownArrow from "../img/dropdown-arrow.svg"

import filmData from "../data/top-100-christmas-movies.json"

interface IMovie {
  Description: string
  Director: string
  Duration: string
  Image: string
  "Image Alt": string
  Metascore: string
  "Movie Link": string
  Position: string
  Rating: string
  Stars: string
  Title: string
  Votes: string
  Year: string
}

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
        <ActiveMiniature movie={movie} handleSelectMovie={handleSelectMovie} />
      ))}
    </ul>
  )
}

function Miniature({
  movie,
  unselectMovie,
}: {
  movie: IMovie
  unselectMovie: () => void
}) {
  const formatedTitle = (title: string) => {
    return title.split(". ")[1] || ""
  }

  return (
    <div className="Miniature" onClick={unselectMovie}>
      <img className="poster" src={movie.Image} alt={movie["Image Alt"]} />
      <p className="title">{formatedTitle(movie.Title)}</p>
      <p className="year">{movie.Year}</p>
    </div>
  )
}

function ActiveMiniature({
  movie,
  handleSelectMovie,
}: {
  movie: IMovie
  handleSelectMovie: (movie: IMovie) => void
}) {
  const formatedTitle = (title: string) => {
    return title.split(". ")[1] || ""
  }

  return (
    <li
      className="ActiveMiniature"
      key={movie["Movie Link"]}
      onClick={() => handleSelectMovie(movie)}
    >
      <img className="poster" src={movie.Image} alt={movie["Image Alt"]} />
      <p className="title">{formatedTitle(movie.Title)}</p>
      <p className="year">{movie.Year}</p>
    </li>
  )
}

function CustomDropdown() {
  const inputRef = useRef<HTMLInputElement>(null)

  const focusOnInput = () => {
    inputRef.current?.focus()
  }

  const [query, setQuery] = useState("")

  const updateQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  const [selectedMovie, setSelectedMovie] = useState<IMovie | null>(null)

  const handleSelectMovie = (movie: IMovie) => {
    setSelectedMovie(movie)
    if (inputRef.current) {
      inputRef.current.value = ""
    }
    setQuery("")
  }

  const unselectMovie = () => {
    setSelectedMovie(null)
  }

  return (
    <div className="CustomDropdown">
      <input
        ref={inputRef}
        type="text"
        className={selectedMovie ? "text-input hidden" : "text-input"}
        onChange={updateQuery}
      />
      {selectedMovie && (
        <Miniature movie={selectedMovie} unselectMovie={unselectMovie} />
      )}
      <label className="label" onClick={focusOnInput}>
        Your Favorite Holiday Movie
      </label>
      <img
        src={dropdownArrow}
        alt="dropdown arrow"
        className="dropdown-arrow"
      />

      <MovieList query={query} handleSelectMovie={handleSelectMovie} />
    </div>
  )
}

export default CustomDropdown
