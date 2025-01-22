import cover from "./src/img/cover.svg"

import "./TogglePricingPage.css"

import TogglePricing from "./src/component/TogglePricing"

function TogglePricingPage() {
  return (
    <div className="TogglePricingPage">
      <img
        className="cover"
        src={cover}
        alt="the advent of code cover day 18: toggle pricing"
      />

      <TogglePricing />
    </div>
  )
}

export default TogglePricingPage
