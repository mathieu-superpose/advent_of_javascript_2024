import cover from "./src/img/cover.svg"

import "./NinjaQuotePage.css"

import NinjaQuote from "./src/components/NinjaQuote"

function NinjaQuotePage() {
  return (
    <div className="NinjaQuotePage">
      <img
        className="cover"
        src={cover}
        alt="the advent of javascript cover day 12"
      />
      <NinjaQuote />
    </div>
  )
}

export default NinjaQuotePage
