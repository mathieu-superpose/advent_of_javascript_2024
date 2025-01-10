import cover from "./src/img/cover.svg"

import "./CopyToClipboardPage.css"

import CopyToClipboardInput from "./src/components/CopyToClipboardInput.tsx"

function CopyToClipboardPage() {
  return (
    <div className="CopyToClipboardPage">
      <img
        className="cover"
        src={cover}
        alt="the advent of javascript cover day 06"
      />

      <div className="title">
        <CopyToClipboardInput />
      </div>
    </div>
  )
}

export default CopyToClipboardPage
