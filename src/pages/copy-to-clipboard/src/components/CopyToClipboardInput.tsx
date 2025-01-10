import { useRef, useState } from "react"

import useCopyToClipboard from "../hooks/useCopyToClipboard"

import "./CopyToClipboardInput.css"

import Check from "./Check"
import Clipboard from "./Clipboard"

function Tip({ content }: { content: string }) {
  return <div className="tip">{content}</div>
}

function CopyToClipboardInput() {
  const inputRef = useRef<HTMLInputElement>(null)
  const { isCopied, copyToClipboard } = useCopyToClipboard()
  const [value, setValue] = useState("Copy me!")

  const handleButtonClick = () => {
    copyToClipboard(value)
  }

  return (
    <div
      className="CopyToClipboardInput"
      onClick={() => inputRef.current?.focus()}
    >
      <input
        ref={inputRef}
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <div className="buttonGroup">
        <button className="button" onClick={handleButtonClick}>
          {isCopied ? <Check /> : <Clipboard />}
        </button>
        <Tip content={isCopied ? "Copied!" : "Copy"} />
      </div>
    </div>
  )
}

export default CopyToClipboardInput
