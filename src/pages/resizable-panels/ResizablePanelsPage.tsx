import "./ResizablePanelsPage.css"

import cover from "./src/img/cover.svg"

import ResizablePanels from "./src/components/ResizablePanels.tsx"

function ResizablePanelsPage() {
  return (
    <div className="ResizablePanelsPage">
      <img
        className="cover"
        src={cover}
        alt="the advent of code 2024 cover day 04"
      />

      <ResizablePanels />
    </div>
  )
}

export default ResizablePanelsPage
