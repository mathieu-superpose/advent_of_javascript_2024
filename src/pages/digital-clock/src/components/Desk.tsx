import toolbar from "../img/toolbar.svg"

import "./Desk.css"

import DigitalClock from "./DigitalClock"

function Desk() {
  return (
    <div className="Desk">
      <img className="toolbar" src={toolbar} alt="toolbar" />
      <DigitalClock />
    </div>
  )
}

export default Desk
