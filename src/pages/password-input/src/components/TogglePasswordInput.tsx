import "./TogglePasswordInput.css"

import Lock from "./Lock"
import Eye from "./Eye"
import Background from "./Background"

function TogglePasswordInput() {
  return (
    <div className="TogglePasswordInput">
      <div className="elements">
        <Lock color={"#171546"} />
        <input type="password" className="password" placeholder="password" />

        <button className="toggle">
          <Eye open={true} color={"#60c6c2"} />
        </button>
      </div>

      <Background />
    </div>
  )
}

export default TogglePasswordInput
