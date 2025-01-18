import cover from "./src/img/cover.svg"

import "./BoxShadowGeneratorPage.css"

import BoxShadowGenerator from "./src/components/BoxShadowGenerator"

function BoxShadowGeneratorPage() {
  return (
    <div className="BoxShadowGeneratorPage">
      <img
        className="cover"
        src={cover}
        alt="the advent of javascript cover day 24: Box Shadow Generator"
      />
      <BoxShadowGenerator />
    </div>
  )
}

export default BoxShadowGeneratorPage
