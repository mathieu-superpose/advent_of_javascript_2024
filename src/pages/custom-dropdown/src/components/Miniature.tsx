import { IMovie } from "./CustomDropDown"

const MiniatureContent = ({ movie }: { movie: IMovie }) => {
  const formatedTitle = (title: string) => {
    return title.split(". ")[1] || ""
  }
  return (
    <>
      <img className="poster" src={movie.Image} alt={movie["Image Alt"]} />
      <p className="title">{formatedTitle(movie.Title)}</p>
      <p className="year">{movie.Year}</p>
    </>
  )
}

function Miniature({
  active,
  movie,
  movieHandler,
}: {
  active: boolean
  movie: IMovie
  movieHandler: (movie: IMovie | null) => void
}) {
  if (active) {
    return (
      <li className="ActiveMiniature" onClick={() => movieHandler(movie)}>
        <MiniatureContent movie={movie} />
      </li>
    )
  } else {
    return (
      <li className="Miniature" onClick={() => movieHandler(null)}>
        <MiniatureContent movie={movie} />
      </li>
    )
  }
}

export default Miniature
