import cover from "./src/img/cover.svg"

import "./CalendarPickerPage.css"

import CaldendarPicker from "./src/components/CalendarPicker.tsx"

function CalendarPickerPage() {
  return (
    <div className="CalendarPickerPage">
      <img className="cover" src={cover} alt="cover" />
      <CaldendarPicker />
    </div>
  )
}

export default CalendarPickerPage
