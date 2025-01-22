import { useCallback, useEffect, useState } from "react"

function useCopyToClipboard() {
  const [isCopied, setIsCopied] = useState(false)

  const copyToClipboard = useCallback((text: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        setIsCopied(true)
      })
    }
  }, [])

  useEffect(() => {
    if (isCopied) {
      const id = setTimeout(() => {
        setIsCopied(false)
      }, 5000)

      return () => clearTimeout(id)
    }
  }, [isCopied])

  return { isCopied, copyToClipboard }
}

export default useCopyToClipboard
