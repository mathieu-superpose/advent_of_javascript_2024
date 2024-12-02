import NavigationButton from "../components/NavigationButton"

import "./NoMatch.css"

function NoMatch() {
  return (
    <div className="NoMatch">
      <h1>The page you requested doesn't exist yet</h1>

      <NavigationButton path="/" label="Go to Home" className="Btn" />
    </div>
  )
}

export default NoMatch
