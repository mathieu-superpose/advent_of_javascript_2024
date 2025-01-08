import { useRef, useState } from "react"

import "./CustomDropdown.css"

import MovieList from "./MovieList"
import Miniature from "./Miniature"

import dropdownArrow from "../img/dropdown-arrow.svg"

export interface IMovie {
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
        <Miniature
          active={false}
          movie={selectedMovie}
          movieHandler={unselectMovie}
        />
      )}
      <label
        className={selectedMovie ? "label active" : "label"}
        onClick={focusOnInput}
      >
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
