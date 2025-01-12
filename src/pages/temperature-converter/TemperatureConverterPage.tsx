import "./TemperatureConverterPage.css"

import TemperatureConverter from "./src/components/TemperatureConverter"

import cover from "./src/img/cover.svg"

function TemperatureConverterPage() {
  return (
    <div className="TemperatureConverterPage">
      <img
        className="cover"
        src={cover}
        alt="the advent of javascript cover day 13"
      />

      <TemperatureConverter />
    </div>
  )
}

export default TemperatureConverterPage
