import cover from "./src/img/cover.svg"

import "./DigitalClockPage.css"

import Desk from "./src/components/Desk"

function DigitalClockPage() {
  return (
    <div className="DigitalClockPage">
      <img
        className="cover"
        src={cover}
        alt="the advent of javascript cover day 11"
      />

      <Desk />
    </div>
  )
}

export default DigitalClockPage
