import { useRef, useState } from "react"

import dial from "../img/dial.svg"

import "./RotatingIndicator.css"

import OuterRing from "./OuterRing"

function RotatingIndicator() {
  const indicatorRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const temperatureRef = useRef<HTMLInputElement>(null)
  const outerRingRef = useRef<HTMLImageElement>(null)

  const [percent, setPercent] = useState(60)
  const [isFarhenheit, setIsFarhenheit] = useState(false)

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseup", handleMouseUp)
  }

  const handleMouseMove = (e: MouseEvent) => {
    const container = containerRef.current
    const indicator = indicatorRef.current

    if (!container || !indicator) return

    // maintain the cursor as a pointer
    document.body.style.cursor = "pointer"

    const rect = container.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const angle = Math.PI + Math.atan2(e.clientY - centerY, e.clientX - centerX)
    const degrees = Math.floor((angle * 180) / Math.PI)

    // handleDegChange(degrees)
    indicator.style.transform = `rotate(${degrees}deg)`

    // update the temperature input
    handleDegChange(degrees)
  }

  const handleMouseUp = () => {
    // reset the cursor
    document.body.style.cursor = "auto"

    document.removeEventListener("mousemove", handleMouseMove)
    document.removeEventListener("mouseup", handleMouseUp)
  }

  const handleDegChange = (deg: number) => {
    if (!temperatureRef.current) {
      return
    }

    const percentage = ((deg + 90) % 360) / 360

    setPercent(Math.round(percentage * 100))

    const temp = isFarhenheit
      ? Math.round(32 + percentage * 43)
      : Math.round(percentage * 40)

    temperatureRef.current.value = temp.toString()
  }

  const handleTemperatureChange = (temperature: string) => {
    if (/[^0123456789]/.test(temperature)) {
      return
    }

    const indicator = indicatorRef.current
    if (!indicator) {
      return
    }

    const temp = Math.round(Number(temperature))
    const percentage = isFarhenheit ? (temp - 32) / 43 : temp / 40

    setPercent(Math.round(percentage * 100))

    const angle = Math.round(percentage * 360) - 90

    indicator.style.transform = `rotate(${angle}deg)`
  }

  const handleConvertion = () => {
    if (!temperatureRef.current) {
      return
    }

    const temperature = Number(temperatureRef.current.value)

    const convertedTemperature = isFarhenheit
      ? Math.round((temperature - 32) * (5 / 9))
      : Math.round(temperature * (9 / 5) + 32)

    temperatureRef.current.value = convertedTemperature.toString()

    setIsFarhenheit(!isFarhenheit)
  }

  return (
    <div ref={containerRef} className="RotatingIndicator">
      <div ref={outerRingRef} className="outer-ring">
        <OuterRing percentage={percent} />
      </div>
      <div className="inner-ring" />
      <div className="dialContainer" ref={indicatorRef}>
        <img
          src={dial}
          alt="Dial"
          draggable="false"
          className="dial"
          onMouseDown={handleMouseDown}
        />
      </div>

      <div className="top">{isFarhenheit ? "54°" : "20°"}</div>
      <div className="right">{isFarhenheit ? "64°" : "30°"}</div>
      <div className="bottom">{isFarhenheit ? "32°" : "0°"}</div>
      <div className="left">{isFarhenheit ? "43°" : "10°"}</div>

      <div className="temperatureContainer">
        <input
          ref={temperatureRef}
          className="temperature"
          type="number"
          onChange={(e) => handleTemperatureChange(e.target.value)}
          defaultValue="24"
        />
        <span className="degrees">{isFarhenheit ? "°F" : "°C"}</span>
      </div>

      <button className="temperatureConverterBtn" onClick={handleConvertion}>
        {isFarhenheit ? "Convert to Celsius" : "Convert to Farhenheit"}
      </button>
    </div>
  )
}

export default RotatingIndicator
