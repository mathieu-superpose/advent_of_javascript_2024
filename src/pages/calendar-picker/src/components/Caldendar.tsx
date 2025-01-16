import { useMemo, useState } from "react"

import "./Calendar.css"

import arrowLeft from "../img/arrow--left.svg"
import arrowRight from "../img/arrow--right.svg"

import {
  monthFromDate,
  sameDay,
  isPassed,
} from "../../../../utils/dateFormater"

function Day({
  date,
  today,
  selectedDate,
  handleSelectedDate,
}: {
  date: Date
  today: Date
  selectedDate: Date | null
  handleSelectedDate: (date: Date) => void
}) {
  const handleDateClick = () => {
    handleSelectedDate(date)
  }

  const className = useMemo(() => {
    const classes = []

    if (isPassed(date)) {
      classes.push("past")
    }

    if (selectedDate && sameDay(date, selectedDate)) {
      classes.push("selected")
    }

    if (sameDay(date, today)) {
      classes.push("today")
    }

    return classes.join(" ")
  }, [selectedDate, today])

  return (
    <li className={className} key={date.toISOString()}>
      <button onClick={handleDateClick}>{date.getDate()}</button>
    </li>
  )
}

function Calendar({
  selectedDate,
  handleSelectedDate,
  open,
}: {
  selectedDate: Date | null
  handleSelectedDate: (date: Date) => void
  open: boolean
}) {
  const today = useMemo(() => new Date(), [])
  const [currentDate, setCurrentDate] = useState(new Date())

  const dates = useMemo(() => {
    const month = []

    const lastDay = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    ).getDate()

    for (let i = 1; i <= lastDay; i++) {
      month.push(new Date(currentDate.getFullYear(), currentDate.getMonth(), i))
    }

    return month
  }, [currentDate])

  const handleDate = (decay: number) => {
    const date = new Date(currentDate)
    date.setMonth(date.getMonth() + decay)
    setCurrentDate(date)
  }

  return (
    <div className={open ? "Calendar open" : "Calendar"}>
      <header>
        <button onClick={() => handleDate(-1)}>
          <img src={arrowLeft} alt="previous month" />
        </button>
        <h2>
          {monthFromDate(currentDate)} {currentDate.getFullYear()}
        </h2>
        <button onClick={() => handleDate(1)}>
          <img src={arrowRight} alt="next month" />
        </button>
      </header>
      <main>
        <ul className="days-indicator">
          <li key="sunday">S</li>
          <li key="monday">M</li>
          <li key="tuesday">T</li>
          <li key="wednesday">W</li>
          <li key="thusday">T</li>
          <li key="friday">F</li>
          <li key="saturday">S</li>
        </ul>
        <ul className="days">
          {dates.map((date) => (
            <Day
              date={date}
              key={date.toISOString()}
              selectedDate={selectedDate}
              handleSelectedDate={handleSelectedDate}
              today={today}
            />
          ))}
        </ul>
      </main>
    </div>
  )
}

export default Calendar
