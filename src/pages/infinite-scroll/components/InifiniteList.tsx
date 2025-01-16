import { useEffect, useMemo, useRef } from "react"

import "./InfiniteList.css"

interface IFilm {
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

function FilmList({ list, listIndex }: { list: IFilm[]; listIndex: number }) {
  const formatTitle = (title: string) => {
    return title.split(". ")[1]
  }

  return (
    <ul className="FilmList" id={`list${listIndex}`}>
      {list.map((film) => (
        <li className="Film" key={film.Title}>
          <img className="poster" src={film.Image} alt={film["Image Alt"]} />
          <div className="details">
            <h2 className="title">{formatTitle(film.Title)}</h2>
            <p className="year">{film.Year}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}

function InfiniteList({ data }: { data: IFilm[] }) {
  const containerRef = useRef<HTMLDivElement>(null)

  const list = useMemo(() => {
    return data.slice(0, 15)
  }, [data])

  useEffect(() => {
    const container = containerRef.current

    if (!container) {
      return
    }

    const second = document.getElementById("list1")

    if (!second) {
      return
    }

    const infiniteScroller = () => {
      const secondBound = second.getBoundingClientRect()
      const containerBound = container.getBoundingClientRect()

      // scroll from top to bottom
      if (secondBound.top > containerBound.top) {
        container.scrollTop += container.scrollHeight / 3
      }

      // scroll from bottom to top
      if (secondBound.bottom < containerBound.bottom) {
        container.scrollTop -= container.scrollHeight / 3
      }
    }

    container.addEventListener("scroll", infiniteScroller)

    return () => {
      container.removeEventListener("scroll", infiniteScroller)
    }
  }, [list])

  return (
    <div ref={containerRef} className="InfiniteList">
      <FilmList list={list} listIndex={0} />
      <FilmList list={list} listIndex={1} />
      <FilmList list={list} listIndex={2} />
    </div>
  )
}

export default InfiniteList
