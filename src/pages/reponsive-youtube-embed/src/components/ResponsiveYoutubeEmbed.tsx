function ResponsiveYoutubeEmbed({
  videoId,
  width,
  height,
}: {
  videoId: string
  width: number
  height: number
}) {
  return (
    <iframe
      width={width}
      height={height}
      src={`https://www.youtube.com/embed/${videoId}`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    />
  )
}

export default ResponsiveYoutubeEmbed
