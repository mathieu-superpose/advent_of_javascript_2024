import { useEffect, useRef, useState } from "react"

import "./ResponsiveYoutubeEmbedPage.css"

import ResponsiveYoutubeEmbed from "./src/components/ResponsiveYoutubeEmbed"

function ResponsiveYoutubeEmbedPage() {
  const containerRef = useRef<HTMLDivElement>(null)

  const [height, setHeight] = useState(0)
  const [width, setWidth] = useState(0)

  const handleResize = () => {
    if (containerRef.current) {
      const { height, width } = containerRef.current.getBoundingClientRect()
      setHeight(height)
      setWidth(width)
    }
  }

  useEffect(() => {
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className="ResponsiveYoutubeEmbedPage">
      <div ref={containerRef} className="youtube-wrapper">
        <ResponsiveYoutubeEmbed
          videoId="-9cO1OseeB8"
          height={height}
          width={width}
        />
      </div>
    </div>
  )
}

export default ResponsiveYoutubeEmbedPage
