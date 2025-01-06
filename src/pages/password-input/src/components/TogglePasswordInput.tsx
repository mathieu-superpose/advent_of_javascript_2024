import { useState } from "react"

import "./TogglePasswordInput.css"

import Lock from "./Lock"
import Eye from "./Eye"
import Background from "./Background"

function TogglePasswordInput() {
  const [open, setOpen] = useState(true)

  return (
    <div className="TogglePasswordInput">
      <div className="elements">
        <Lock open={open} />

        <input
          type={open ? "password" : "text"}
          className={open ? "password" : "password open"}
          placeholder="password"
        />

        <button className="toggle" onClick={() => setOpen(!open)}>
          <Eye open={open} color={"#60c6c2"} />
        </button>
      </div>

      <Background open={open} />
    </div>
  )
}

export default TogglePasswordInput
