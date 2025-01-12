import "./PersistentDataPage.css"

import cover from "./src/img/cover.svg"

import PersistentForm from "./src/components/PersistentForm"

function PersistentDataPage() {
  return (
    <div className="PersistentDataPage">
      <img
        className="cover"
        src={cover}
        alt="the advent of javascript cover day 09"
      />
      <PersistentForm />
    </div>
  )
}

export default PersistentDataPage
