import "./TagInputFieldPage.css"

import TagInput from "./src/components/TagInput"

import cover from "./src/img/cover.svg"

function TagInputFieldPage() {
  return (
    <div className="TagInputFieldPage">
      <img
        className="cover"
        src={cover}
        alt="the advent of javascript cover day 08"
      />
      <TagInput />
    </div>
  )
}

export default TagInputFieldPage
