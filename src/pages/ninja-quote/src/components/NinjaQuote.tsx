import { useEffect, useState } from "react"

import "./NinjaQuote.css"

import paperTexture from "../img/paper-texture.jpeg"
import quotationMark from "../img/quotation-marks.svg"

function NinjaQuote() {
  const [quote, setQuote] = useState("")

  useEffect(() => {
    const fetchQuote = async () => {
      const key = import.meta.env.VITE_NINJA
      const url = "https://api.api-ninjas.com/v1/quotes"

      const response = await fetch(url, {
        headers: {
          "X-Api-Key": key,
        },
      })

      const data = await response.json()

      setQuote(data[0].quote)
    }

    fetchQuote()
  }, [])

  return (
    <div className="NinjaQuote">
      <img src={paperTexture} alt="Paper texture" className="paper-texture" />

      <div className="quote">
        <img
          src={quotationMark}
          alt="Quotation mark"
          className="quotation-mark"
        />
        <p>{quote}</p>
      </div>
    </div>
  )
}

export default NinjaQuote
