import "./DragAndDropCardsPage.css"

import DragAndDrop from "./src/components/DragAndDrop"

import cover from "./src/img/cover.svg"

function DragAndDropCardsPage() {
  return (
    <div className="DragAndDropCardsPage">
      <img
        className="cover"
        src={cover}
        alt="the advent of javascript cover day 22: Drag and Drop Cards"
      />
      <DragAndDrop />
    </div>
  )
}

export default DragAndDropCardsPage
