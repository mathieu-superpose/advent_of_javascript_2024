import cover from "./src/img/cover.svg"

import "./ExpenseTrackerPage.css"

import ExpenseTracker from "./src/components/ExpenseTracker"

function ExpenseTrackerPage() {
  return (
    <div className="ExpenseTrackerPage">
      <img
        className="cover"
        src={cover}
        alt="the advent of javascript cover day 23: expense tracker"
      />
      <ExpenseTracker />
    </div>
  )
}

export default ExpenseTrackerPage
