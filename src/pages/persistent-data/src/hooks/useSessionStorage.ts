import { useEffect, useState } from "react"

function useSessionStorage(key: string, initialValue: string) {
  const [value, setValue] = useState(() => {
    const storedValue = sessionStorage.getItem(key)
    return storedValue !== null ? storedValue : initialValue
  })

  useEffect(() => {
    sessionStorage.setItem(key, value)
  }, [key, value])

  return {value, setValue}
}

export default useSessionStorage
