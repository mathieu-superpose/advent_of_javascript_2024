import TogglePasswordInput from "./src/components/TogglePasswordInput.tsx"

import cover from "./src/img/cover.png"

import "./PasswordInput.css"

function PasswordInput() {
  return (
    <div className="PasswordInput">
      <img className="cover" src={cover} alt="cover" />
      <TogglePasswordInput />
    </div>
  )
}

export default PasswordInput
