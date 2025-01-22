import { useState } from "react"

function CharacterCounter() {
  const [count, setCount] = useState(0)

  const updateCount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const content = e.target.value

    let count = 0

    for (let i = 0; i < content.length; i++) {
      if ("abcdefghijklmnopqrstuvwxyz0123456789".includes(content[i])) {
        count++
      }
    }

    setCount(count)
  }

  return (
    <div>
      <input type="text" onChange={updateCount} />
      <p>Character count: {count}</p>
    </div>
  )
}

export default CharacterCounter
