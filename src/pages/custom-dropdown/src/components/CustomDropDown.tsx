import { useRef } from "react"

import "./CustomDropdown.css"

import dropdownArrow from "../img/dropdown-arrow.svg"

function CustomDropdown() {
  const inputRef = useRef<HTMLInputElement>(null)

  const focusOnInput = () => {
    inputRef.current?.focus()
  }

  return (
    <div className="CustomDropdown">
      <input ref={inputRef} type="text" className="text-input" />
      <label className="label" onClick={focusOnInput}>
        Your Favorite Holiday Movie
      </label>
      <img
        src={dropdownArrow}
        alt="dropdown arrow"
        className="dropdown-arrow"
      />
    </div>
  )
}

export default CustomDropdown
