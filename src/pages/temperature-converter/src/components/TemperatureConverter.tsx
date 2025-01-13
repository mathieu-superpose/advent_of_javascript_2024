import { useEffect, useRef, useState } from "react"

import "./TemperatureConverter.css"

import dial from "../img/dial.svg"
import dots from "../img/dots.svg"
import innerRing from "../img/inner-ring.svg"
import outerRing from "../img/outer-ring.svg"

function TemperatureConverter() {
  const dialRef = useRef<HTMLImageElement>(null)
  const outerRef = useRef<HTMLImageElement>(null)
  const [temperature, setTemperature] = useState("24")
  const [isFarhenheit, setIsFarhenheit] = useState(false)
  const [isDragging, setIsDragging] = useState(false)

  const convertTemperature = () => {
    let temp = parseInt(temperature)

    if (isFarhenheit) {
      temp = ((temp - 32) * 5) / 9
    } else {
      temp = (temp * 9) / 5 + 32
    }

    setTemperature(Math.round(temp).toString())
    setIsFarhenheit(!isFarhenheit)
  }

  useEffect(() => {
    if (!dialRef?.current) {
      return
    }

    if(isDragging) {
      return
    }

    if (/[^0123456789]/.test(temperature)) {
      return
    }

    // wait enough to make sure user has stopped typing
    const timeout = setTimeout(() => {
      const temp = parseInt(temperature)
      let angle = isFarhenheit ? (360 * temp) / 100 : (360 * temp) / 40
      angle += 90

      if (dialRef.current) {
        dialRef.current.style.transform = `translate(-50%, -50%) rotate(${angle}deg) translate(160px) rotate(${
          -1 * angle
        }deg)`
      }
    }, 200)

    return () => clearTimeout(timeout)
  }, [temperature, isFarhenheit])

  // useEffect(() => {
  //   if (!isDragging) {
  //     return
  //   }

  //   const handleMouseMove = (e: MouseEvent) => {
  //     const rect = temperatureRef.current?.getBoundingClientRect()

  //     if (!rect) {
  //       return
  //     }

  //     // calculate the center coordinates of the temperature div
  //     const centerX = rect.left + rect.width / 2
  //     const centerY = rect.top + rect.height / 2

  //     const x = e.clientX - centerX
  //     const y = e.clientY - centerY

  //     console.log({ x, y })

  //     let angle = Math.atan2(y, x) * (180 / Math.PI)

  //     dialRef.current!.style.transform = `translate(-50%, -50%) rotate(${angle}deg) translate(160px) rotate(${
  //       -1 * angle
  //     }deg)`
  //   }

  //   const handleMouseUp = () => {
  //     document.removeEventListener("mousemove", handleMouseMove)
  //     setIsDragging(false)
  //   }

  //   window.addEventListener("mousemove", handleMouseMove)
  //   window.addEventListener("mouseup", handleMouseUp)

  //   return () => {
  //     document.removeEventListener("mouseup", handleMouseUp)
  //   }
  // }, [isDragging])

  const handleMouseDown = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e) => {
    if (!isDragging) {
      return
    }
    if (!outerRef?.current) {
      return
    }

    if (!dialRef?.current) {
      return
    }

    const rect = outerRef.current.getBoundingClientRect()

    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    const newAngle = Math.atan2(y, x) * (180 / Math.PI)

    // console.log({ newAngle })

    dialRef.current.style.transform = `translate(-50%, -50%) rotate(${newAngle}deg) translate(160px) rotate(${
      newAngle * -1
    }deg)`

    const newTemp = isFarhenheit
      ? (newAngle * 100) / 360
      : (newAngle * 40) / 360

    setTemperature(() => Math.round(newTemp).toString())
  }

  useEffect(() => {
    document.addEventListener("mouseup", handleMouseUp)
    return () => {
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [])

  return (
    <div className="TemperatureConverter">
      <img src={dots} className="dots" alt="dots" />
      <img
        ref={outerRef}
        src={outerRing}
        className="outer-ring"
        alt="outer ring"
        onMouseMove={handleMouseMove}
      />
      <img src={innerRing} className="inner-ring" alt="inner ring" />
      <img
        ref={dialRef}
        src={dial}
        className="dial"
        alt="dial"
        onMouseDown={handleMouseDown}
      />

      <div className="top">{isFarhenheit ? "50°" : "20°"}</div>
      <div className="left">{isFarhenheit ? "25°" : "10°"}</div>
      <div className="right">{isFarhenheit ? "75°" : "30°"}</div>
      <div className="bottom">0°</div>

      <div className="temperature">
        <input
          type="number"
          min={isFarhenheit ? 32 : 0}
          max={isFarhenheit ? 100 : 40}
          value={temperature}
          onChange={(e) => setTemperature(e.target.value)}
        />
        <span>{isFarhenheit ? "°F" : "°C"}</span>
      </div>

      <button className="convertionBtn" onClick={convertTemperature}>
        {isFarhenheit ? "Convert to Celcius" : "Convert to Farhenheit"}
      </button>
    </div>
  )
}

export default TemperatureConverter
