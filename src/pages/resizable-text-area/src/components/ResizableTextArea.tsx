import "./ResizableTextArea.css"

function ResizableTextArea({ rows = 3 } : { rows?: number }) {
  return (
    <textarea
      className="ResizableTextArea"
      style={{ resize: "none" }}
      rows={rows}
      onInput={(e) => {
        e.currentTarget.rows = Math.max(rows, e.currentTarget.value.split("\n").length)
      }}
    />
  )
}

export default ResizableTextArea
