import cover from "./src/img/cover.svg"

import "./FloatingActionButtonPage.css"

import FloatingActionButton from "./src/components/FloatingActionButton.tsx"

function FloatingActionButtonPage() {
  return (
    <div className="FloatingActionButtonPage">
      <img
        className="cover"
        src={cover}
        alt="the advent of javascript cover day 10"
      />
      <FloatingActionButton />
    </div>
  )
}

export default FloatingActionButtonPage
