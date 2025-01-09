import { useEffect, useRef } from "react"

import "./ResizablePanels.css"

function ResizablePanels() {
  const containerRef = useRef<HTMLDivElement>(null)
  const topRef = useRef<HTMLDivElement>(null)
  const horizontalRef = useRef<HTMLDivElement>(null)
  const leftRef = useRef<HTMLDivElement>(null)
  const verticalRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let horizontalStart = 0
    let verticalStart = 0

    if (
      !containerRef.current ||
      !topRef.current ||
      !horizontalRef.current ||
      !leftRef.current ||
      !verticalRef.current ||
      !rightRef.current
    ) {
      return
    }

    let topPosition = containerRef.current?.getBoundingClientRect().top
    let leftPosition = containerRef.current?.getBoundingClientRect().left

    const onMouseDownHorizontalResize = (e: MouseEvent) => {
      verticalStart = e.clientY
      window.addEventListener("mousemove", verticalResizing)
      window.addEventListener("mouseup", onMouseUpHorizontalResize)
    }

    const onMouseUpHorizontalResize = () => {
      window.removeEventListener("mousemove", verticalResizing)
      window.removeEventListener("mouseup", onMouseUpHorizontalResize)
    }

    horizontalRef.current.addEventListener(
      "mousedown",
      onMouseDownHorizontalResize
    )

    const verticalResizing = (e: MouseEvent) => {
      const first = e.clientY - topPosition

      if (first > 10 && first < 386) {
        const last = 400 - first - 4
        const gridTemplateRows = `${first}px 4px ${last}px`

        if (containerRef.current) {
          containerRef.current.style.gridTemplateRows = gridTemplateRows
        }
      }
    }

    const onMouseDownVerticalResize = (e: MouseEvent) => {
      horizontalStart = e.clientX
      window.addEventListener("mousemove", horizontalResizing)
      window.addEventListener("mouseup", onMouseUpVerticalResize)
    }

    const onMouseUpVerticalResize = () => {
      window.removeEventListener("mousemove", horizontalResizing)
      window.removeEventListener("mouseup", onMouseUpVerticalResize)
    }

    verticalRef.current.addEventListener("mousedown", onMouseDownVerticalResize)

    const horizontalResizing = (e: MouseEvent) => {
      const first = e.clientX - leftPosition

      if (first > 10 && first < 586) {
        const last = 600 - first - 4
        const gridTemplateColumns = `${first}px 4px ${last}px`
        if (containerRef.current) {
          containerRef.current.style.gridTemplateColumns = gridTemplateColumns
        }
      }
    }

    return () => {
      if (!horizontalRef.current || !verticalRef.current) {
        return
      }

      horizontalRef.current.removeEventListener(
        "mousedown",
        onMouseDownHorizontalResize
      )
      verticalRef.current.removeEventListener(
        "mousedown",
        onMouseDownVerticalResize
      )
    }
  }, [])

  return (
    <div ref={containerRef} className="ResizablePanels">
      <div ref={topRef} className="top" />
      <div ref={horizontalRef} className="horizontal" />
      <div ref={leftRef} className="left" />
      <div ref={verticalRef} className="vertical" />
      <div ref={rightRef} className="right" />
    </div>
  )
}

export default ResizablePanels
