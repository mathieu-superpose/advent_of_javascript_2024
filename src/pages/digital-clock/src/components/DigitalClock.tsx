import { useEffect, useState } from "react"

import "./DigitalClock.css"

function getTime() {
  const date = new Date()
  const hours = date.getHours()
  const minutes = date.getMinutes()

  return `${hours}:${minutes}`
}

function DigitalClock() {
  const [time, setTime] = useState(getTime())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTime())
    }, 60000)

    return () => clearInterval(interval)
  }, [])

  return <div className="DigitalClock">{time}</div>
}

export default DigitalClock
