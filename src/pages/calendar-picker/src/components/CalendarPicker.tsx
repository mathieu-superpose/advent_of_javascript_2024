import { useEffect, useState } from "react"

import calendar from "../img/calendar.svg"

import "./CalendarPicker.css"

import Calendar from "./Caldendar"

import { monthFromDate } from "../../../../utils/dateFormater"

function Date({
  selectedDate,
  setOpen,
}: {
  selectedDate: Date | null
  setOpen: (open: boolean) => void
}) {
  return (
    <button className="Date" onClick={() => setOpen(true)}>
      {selectedDate
        ? `${monthFromDate(
            selectedDate
          )} ${selectedDate.getDate()}, ${selectedDate.getFullYear()}`
        : "Date"}
      <img src={calendar} alt="calendar icon" />
    </button>
  )
}

function CalendarPicker() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [open, setOpen] = useState(false)

  const handleSelectedDate = (date: Date) => {
    setSelectedDate(date)
  }

  useEffect(() => {
    if (!selectedDate) {
      return
    }

    const wait = setTimeout(() => {
      setOpen(false)
      clearTimeout(wait)
    }, 2000)

    return () => {
      clearTimeout(wait)
    }
  }, [selectedDate])

  return (
    <div className="CalendarPicker">
      <Date selectedDate={selectedDate} setOpen={setOpen} />
      <Calendar
        selectedDate={selectedDate}
        handleSelectedDate={handleSelectedDate}
        open={open}
      />
    </div>
  )
}

export default CalendarPicker
