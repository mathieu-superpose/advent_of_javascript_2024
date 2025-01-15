import { useEffect, useRef, useState } from "react"

import data from "./src/data/MERRY-IPSUM.txt"
import cover from "./src/img/cover.svg"

import "./SideScrollPage.css"

function SideScrollPage() {
  const progressRef = useRef<HTMLDivElement>(null)
  const [sections, setSections] = useState<string[]>([])

  useEffect(() => {
    fetch(data)
      .then((response) => response.text())
      .then((text) => text.split("\n\n"))
      .then((sections) => setSections(sections))

    document.documentElement.style.setProperty("--progress", "1")
  }, [])

  const handleSectionClick = (index: number) => {
    document.documentElement.style.setProperty(
      "--progress",
      (index + 1).toString()
    )
  }

  return (
    <div className="SideScrollPage">
      <div className="SideMenu">
        <div className="progress" ref={progressRef} />
        <ul>
          {sections
            ? sections.map((text, index) => (
                <li key={index}>
                  <a
                    onClick={() => handleSectionClick(index)}
                    href={`#section-${index + 1}`}
                  >{`Section ${index + 1}`}</a>
                </li>
              ))
            : "Loading..."}
        </ul>
      </div>
      <main>
        <img
          className="cover"
          src={cover}
          alt="the advent of javascript cover day 17"
        />
        {sections
          ? sections.map((text, index) => (
              <section id={`section-${index + 1}`} key={text}>
                <h2>{`Section ${index + 1}`}</h2>
                <p>{text}</p>
              </section>
            ))
          : "Loading..."}
      </main>
    </div>
  )
}

export default SideScrollPage
