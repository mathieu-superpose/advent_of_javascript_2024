import { useState } from "react"

import "./FloatingActionButton.css"

import bluesky from "../img/icons/bluesky.svg"
import close from "../img/icons/close.svg"
import github from "../img/icons/github.svg"
import instagram from "../img/icons/instagram.svg"
import megaphone from "../img/icons/megaphone.svg"
import threads from "../img/icons/threads.svg"
import youtube from "../img/icons/youtube.svg"

function FloatingActionButton() {
  const [open, setOpen] = useState(false)

  return (
    <div className="FloatingActionButton">
      <button className="mainBtn" onClick={() => setOpen(!open)}>
        {open ? (
          <img src={close} alt="Close" />
        ) : (
          <img src={megaphone} alt="Open" />
        )}
      </button>

      <ul className="btnList">
        <li className={open ? "item open" : "item"}>
          <button onClick={() => setOpen(!open)}>
            <img src={bluesky} alt="bluesky icon" />
          </button>
        </li>
        <li className={open ? "item open" : "item"}>
          <button onClick={() => setOpen(!open)}>
            <img src={github} alt="github icon" />
          </button>
        </li>
        <li className={open ? "item open" : "item"}>
          <button onClick={() => setOpen(!open)}>
            <img src={instagram} alt="instagram icon" />
          </button>
        </li>
        <li className={open ? "item open" : "item"}>
          <button onClick={() => setOpen(!open)}>
            <img src={threads} alt="threads icon" />
          </button>
        </li>
        <li className={open ? "item open" : "item"}>
          <button onClick={() => setOpen(!open)}>
            <img src={youtube} alt="youtube icon" />
          </button>
        </li>
      </ul>
    </div>
  )
}

export default FloatingActionButton
