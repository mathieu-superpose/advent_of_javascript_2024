const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

export const monthFromDate = (date: Date) => {
  return MONTHS[date.getMonth()]
}

export const sameDay = (date1: Date, date2: Date) => {
  return date1.toDateString() === date2.toDateString()
}

export const isPassed = (date: Date) => {
  return date < new Date()
}
