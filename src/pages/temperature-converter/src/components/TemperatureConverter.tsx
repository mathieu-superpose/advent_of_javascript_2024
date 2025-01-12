import { useEffect, useRef, useState } from "react"

import "./TemperatureConverter.css"

import dial from "../img/dial.svg"
import dots from "../img/dots.svg"
import innerRing from "../img/inner-ring.svg"
import outerRing from "../img/outer-ring.svg"

function TemperatureConverter() {
  const dialRef = useRef<HTMLImageElement>(null)
  const [temperature, setTemperature] = useState("24")
  const [isFarhenheit, setIsFarhenheit] = useState(false)

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

  return (
    <div className="TemperatureConverter">
      <img src={dots} className="dots" alt="dots" />
      <img src={outerRing} className="outer-ring" alt="outer ring" />
      <img src={innerRing} className="inner-ring" alt="inner ring" />
      <img ref={dialRef} src={dial} className="dial" alt="dial" />

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
