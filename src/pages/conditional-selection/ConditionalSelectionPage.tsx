import cover from "./src/img/cover.svg"

import data from "./src/data/categories.json"

import "./ConditionalSelectionPage.css"

import ConditionalSelector from "./src/components/ConditonalSelector"

function ConditonalSelectionPage() {
  return (
    <div className="ConditionalSelectionPage">
      <img
        className="cover"
        src={cover}
        alt="the advent of javascript cover day 14"
      />

      <ConditionalSelector data={data} />
    </div>
  )
}

export default ConditonalSelectionPage
