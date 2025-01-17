import { useState } from "react"

function DropArea({
  onDrop,
  last = false,
}: {
  onDrop: () => void
  last?: boolean
}) {
  const [dragging, setDragging] = useState(false)

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDragging(false)
    onDrop()
  }

  return (
    <div
      className={`DropArea ${dragging ? "dragging" : ""} ${
        last ? "last" : ""
      }`}
      onDrop={handleDrop}
      onDragEnter={() => setDragging(true)}
      onDragLeave={() => setDragging(false)}
      onDragEnd={() => setDragging(false)}
      onDragOver={(e) => e.preventDefault()}
    />
  )
}

export default DropArea
