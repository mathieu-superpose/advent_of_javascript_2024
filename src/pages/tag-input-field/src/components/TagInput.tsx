import { useRef, useState } from "react"

import "./TagInput.css"

interface ITag {
  content: string
  id: string
}

function Tag({ tag, removeTag }: { tag: ITag; removeTag: () => void }) {
  return (
    <div className="tag">
      <span className="content">{tag.content}</span>
      <button className="removeBtn" onClick={removeTag}>
        x
      </button>
    </div>
  )
}

function newId(content: string) {
  return Date.now().toString() + content.length.toString()
}

function TagInput() {
  const inputRef = useRef<HTMLInputElement>(null)
  const [tags, setTags] = useState<ITag[]>([])

  const removeTag = (id: string) => {
    setTags(tags.filter((tag) => tag.id !== id))
  }

  const updateTags = () => {
    if (!inputRef.current) {
      return
    }

    const value = inputRef.current?.value

    const end = value.slice(value.length - 2)

    if (end[0] === ",") {
      const content = value.slice(0, value.length - 2).trim()

      if(!content) {
        return
      }

      inputRef.current.value = value.slice(value.length - 1).trim()

      if (tags.find((tag) => tag.content === content)) {
        return
      }

      const id = newId(content)

      setTags([...tags, { content, id }])
    }
  }

  return (
    <div className="TagInput">
      <ul className="tagList">
        {tags.map((tag, index) => (
          <li key={index}>
            {<Tag tag={tag} removeTag={() => removeTag(tag.id)} />}
          </li>
        ))}
      </ul>
      <input
        className="input"
        ref={inputRef}
        type="text"
        placeholder="new tag after comma"
        onChange={updateTags}
      />
    </div>
  )
}

export default TagInput
