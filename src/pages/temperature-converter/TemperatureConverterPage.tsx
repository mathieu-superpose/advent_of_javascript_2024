import "./TemperatureConverterPage.css"

import RotatingIndicator from "./src/components/RotatingIndicator"

import cover from "./src/img/cover.svg"

function TemperatureConverterPage() {
  return (
    <div className="TemperatureConverterPage">
      <img
        className="cover"
        src={cover}
        alt="the advent of javascript cover day 13"
      />

      <RotatingIndicator />
    </div>
  )
}

export default TemperatureConverterPage
