import { useMemo, useState } from "react"
import "./SlugifyTitlePage.css"

import cover from "./src/img/cover.svg"

function SlugifyTitlePage() {
  const [title, setTitle] = useState("")

  const slugify = (title: string) => {
    const slugified = title
      .toLowerCase()
      .trim()
      .replace(/[ \']+$/g, "")
      .replace(/[ \']+/g, "-")
      .normalize("NFD")
      .replace(/[^a-z0-9-]/g, "")

    if (slugified) {
      return "/" + slugified
    } else {
      return ""
    }
  }

  const slug = useMemo(() => slugify(title), [title])

  return (
    <div className="SlugifyTitlePage">
      <img
        className="cover"
        src={cover}
        alt="the advent of javascript cover day 07"
      />

      <div className="Slugifier">
        <label className="label" htmlFor="title">
          Title
        </label>
        <input
          className="title"
          name="title"
          type="text"
          placeholder="Type a title"
          onChange={(e) => setTitle(e.target.value)}
        />
        {slug && <p className="slug">{slug}</p>}
      </div>
    </div>
  )
}

export default SlugifyTitlePage
