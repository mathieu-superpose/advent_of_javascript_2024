import { useEffect, useRef, useState } from "react"

import outerRing from "../img/outer-ring.svg"
import dial from "../img/dial.svg"

import "./RotatingIndicator.css"

function RotatingIndicator() {
  const indicatorRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const temperatureRef = useRef<HTMLInputElement>(null)

  const [deg, setDeg] = useState(0)

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
    const degrees = (angle * 180) / Math.PI


    handleTemperatureChange(String(Math.round(degrees)))
  }

  const handleMouseUp = () => {
    // reset the cursor
    document.body.style.cursor = "auto"

    document.removeEventListener("mousemove", handleMouseMove)
    document.removeEventListener("mouseup", handleMouseUp)
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

    setDeg(temp)
    indicator.style.transform = `rotate(${temp}deg)`
  }

  return (
    <div ref={containerRef} className="RotatingIndicator">
      <img
        src={outerRing}
        alt="Outer ring"
        draggable="false"
        className="outer-ring"
      />
      <div className="dialContainer" ref={indicatorRef}>
        <img
          src={dial}
          alt="Dial"
          draggable="false"
          className="dial"
          onMouseDown={handleMouseDown}
        />
      </div>

      <input
        ref={temperatureRef}
        className="temperature"
        type="number"
        onChange={(e) => handleTemperatureChange(e.target.value)}
        value={deg}
      />
    </div>
  )
}

export default RotatingIndicator
