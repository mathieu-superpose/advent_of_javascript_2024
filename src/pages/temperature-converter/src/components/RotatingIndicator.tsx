import { useRef } from "react"

import outerRing from "../img/outer-ring.svg"
import dial from "../img/dial.svg"

import "./RotatingIndicator.css"

function RotatingIndicator() {
  const indicatorRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

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
    document.body.style.cursor = 'pointer'

    const rect = container.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const angle = Math.PI + Math.atan2(e.clientY - centerY, e.clientX - centerX)
    const degrees = (angle * 180) / Math.PI

    indicator.style.transform = `rotate(${degrees}deg)`
  }

  const handleMouseUp = () => {
    // reset the cursor
    document.body.style.cursor = 'auto'

    document.removeEventListener("mousemove", handleMouseMove)
    document.removeEventListener("mouseup", handleMouseUp)
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
    </div>
  )
}

export default RotatingIndicator
