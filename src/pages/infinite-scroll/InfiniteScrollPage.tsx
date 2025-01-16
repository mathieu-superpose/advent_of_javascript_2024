import cover from "./src/img/cover.svg"
import data from "./src/data/top-100-christmas-movies.json"

import "./InfiniteScrollPage.css"

import InfiniteList from "./components/InifiniteList"

function InfiniteScrollPage() {
  return (
    <div className="InfiniteScrollPage">
      <img
        className="cover"
        src={cover}
        alt="the advent of javascript cover day 20: Inifite Scroll"
      />

      <InfiniteList data={data} />
    </div>
  )
}

export default InfiniteScrollPage
